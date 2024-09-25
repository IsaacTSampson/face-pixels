import Mouse from "./Mouse";
import Particle from "./Particle";
import * as faceapi from "face-api.js";
import { Box } from "../types/Box.ts";
import { constructScaleDimensions } from "../utils.ts";
import { Color } from "../types/Color.ts";

export default class Effect {
  width: number;
  height: number;
  particlesArray: Particle[];
  video: HTMLVideoElement | null;
  x: number;
  y: number;
  gap: number;
  mouse: Mouse;
  faceDetections: Box[];
  maxNumberOfFaces: number;
  intervalId: number;
  pixelSize: number;
  visibilityEase: number;
  recognitionLeniency: number;
  canvasScaleRatio: number;
  wrapper: HTMLDivElement;
  mouseInFaceDetection: boolean;
  pixels: Uint8ClampedArray | null;

  constructor(
    width: number,
    height: number,
    canvasScaleRatio: number,
    pixelSize: number,
    mouseRadius: number,
    visibilityEase: number,
    recognitionLeniency: number,
    video: HTMLVideoElement | null,
    wrapper: HTMLDivElement,
  ) {
    this.width = width;
    this.height = height;
    this.particlesArray = [];
    this.video = video;
    this.x = 0;
    this.y = 0;
    this.gap = pixelSize;
    this.mouse = new Mouse(mouseRadius * 1000, -Infinity, -Infinity);
    this.faceDetections = [];
    this.maxNumberOfFaces = 0;
    this.intervalId = -1;
    this.pixelSize = pixelSize;
    this.visibilityEase = visibilityEase;
    this.recognitionLeniency = recognitionLeniency;
    this.canvasScaleRatio = canvasScaleRatio;
    this.wrapper = wrapper;
    this.mouseInFaceDetection = false;
    this.pixels = null;

    this.wrapper.addEventListener("mousemove", this.onMouseMove);
    this.video?.play();
    this.video?.addEventListener("loadeddata", () => this.detectFaces());

    if ((this.video?.readyState ?? 0) > 0) this.detectFaces();
    if (this.video) this.video.currentTime = 0;
  }

  delete = () => {
    this.wrapper.removeEventListener("mousemove", this.onMouseMove);
    window.clearInterval(this.intervalId);
  };

  onMouseMove = (event: MouseEvent) => {
    this.mouse.x = event.clientX * this.canvasScaleRatio;
    this.mouse.y = event.clientY * this.canvasScaleRatio;
  };

  updateParticleColors(
    context: CanvasRenderingContext2D,
    options?: { init?: boolean },
  ) {
    const init: boolean = !!options?.init;
    const canvas = context.canvas;

    const sourceWidth: number = this.video?.videoWidth ?? 0;
    const sourceHeight: number = this.video?.videoHeight ?? 0;

    const {
      x: offSetX,
      y: offSetY,
      w: scaledVideoW,
      h: scaledVideoH,
    } = constructScaleDimensions({
      targetWidth: canvas.width,
      targetHeight: canvas.height,
      sourceWidth,
      sourceHeight,
    });

    const canvasImageSource = this.video;
    if (!canvasImageSource) return;

    const canvasImageSourceWidth: number = this.video?.videoWidth ?? 0;
    const canvasImageSourceHeight: number = this.video?.videoHeight ?? 0;

    context.drawImage(
      canvasImageSource,
      0,
      0,
      canvasImageSourceWidth,
      canvasImageSourceHeight,
      offSetX,
      offSetY,
      scaledVideoW,
      scaledVideoH,
    );

    let pixels: Uint8ClampedArray = context.getImageData(
      0,
      0,
      this.width,
      this.height,
    ).data;

    let i = 0;
    for (let y: number = 0; y < this.height; y += this.gap) {
      for (let x: number = 0; x < this.width; x += this.gap) {
        const index: number = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];

        let visibilityLife: number =
          this.particlesArray[i]?.visibilityLife ?? 0;

        const square1MinX = x;
        const square1MaxX = x + this.pixelSize;
        const square1MinY = y;
        const square1MaxY = y + this.pixelSize;

        this.faceDetections.forEach((detection) => {
          const square2MinX = detection.x;
          const square2MaxX = detection.x + detection.w;
          const square2MinY = detection.y;
          const square2MaxY = detection.y + detection.h;

          const areTouching = !(
            square2MaxX < square1MinX ||
            square2MinX > square1MaxX ||
            square2MaxY < square1MinY ||
            square2MinY > square1MaxY
          );
          if (areTouching) visibilityLife = 1;
        });

        const color: Color = init
          ? { red, green, blue, alpha: 0 }
          : {
              red,
              green,
              blue,
              alpha: this.particlesArray[i].color.alpha,
            };

        init
          ? this.particlesArray.push(
              new Particle(i, this, x, y, color, visibilityLife),
            )
          : this.particlesArray[i].update(color, visibilityLife);
        i++;
      }
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.particlesArray.forEach((particle) => particle.draw(context));
  }

  detectFaces() {
    const imageSource = this.video;
    if (!imageSource) return;

    const displayWidth = this.video?.videoWidth ?? 0;
    const displayHeight = this.video?.videoHeight ?? 0;

    const displaySize = {
      width: displayWidth,
      height: displayHeight,
    };

    const {
      x: offSetX,
      y: offSetY,
      ratio,
    } = constructScaleDimensions({
      targetWidth: this.width,
      targetHeight: this.height,
      sourceWidth: displayWidth,
      sourceHeight: displayHeight,
    });

    let leniencyCount = 0;

    this.intervalId = window.setInterval(() => {
      if (!faceapi.nets.tinyFaceDetector.isLoaded) return;

      faceapi
        .detectAllFaces(imageSource, new faceapi.TinyFaceDetectorOptions())
        .then((detections: faceapi.FaceDetection[]) => {
          let resizedDetections: faceapi.FaceDetection[] = [];

          try {
            resizedDetections = faceapi.resizeResults(detections, displaySize);
          } catch (e) {
            console.error(e);
          }

          if (resizedDetections.length > this.maxNumberOfFaces)
            this.maxNumberOfFaces = resizedDetections.length;

          if (resizedDetections.length < this.maxNumberOfFaces) leniencyCount++;
          else leniencyCount = 0;

          const newDetections: Box[] = resizedDetections.map(
            ({ box }): Box => ({
              x: offSetX + box.x * ratio,
              y: offSetY + box.y * ratio,
              w: box.width * ratio,
              h: box.height * ratio,
            }),
          );

          if (
            resizedDetections.length >= this.maxNumberOfFaces ||
            leniencyCount >= this.recognitionLeniency
          )
            this.faceDetections = [...newDetections];
          else this.faceDetections = [...this.faceDetections, ...newDetections];
          return detections;
        });
    }, 60);
  }
}
