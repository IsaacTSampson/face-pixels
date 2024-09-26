import "./style.css";

import * as faceapi from "face-api.js";
import Animation from "./classes/Animation.ts";

const wrapperId = "wrapper";
const writeCanvasId = "write-canvas";
const readCanvasId = "read-canvas";
const videoId = "video";

const elementNotFoundError = (elementId: string) =>
  new Error(`element with id '${elementId}' not found`);

// config
const pixelSize = 25;
const mouseRadius = 10;
const visibilityEase = 0.1;
const recognitionLeniency = 0;
const frameRate = 120;

const init = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri(`${import.meta.env.BASE_URL}models`);

  const writeCanvas = document.getElementById(
    writeCanvasId,
  ) as HTMLCanvasElement | null;
  if (!writeCanvas) throw elementNotFoundError(writeCanvasId);

  const readCanvas = document.getElementById(
    readCanvasId,
  ) as HTMLCanvasElement | null;
  if (!readCanvas) throw elementNotFoundError(readCanvasId);

  const videoElm = document.getElementById(videoId) as HTMLVideoElement | null;
  if (!videoElm) throw elementNotFoundError(videoId);

  const wrapper = document.getElementById(wrapperId) as HTMLDivElement | null;
  if (!wrapper) throw elementNotFoundError(wrapperId);

  let animation: Animation | null = null;

  const createAnimation = (): Animation | null => {
    if (!writeCanvas || !readCanvas || !videoElm) return null;

    return new Animation(
      pixelSize,
      mouseRadius,
      visibilityEase,
      recognitionLeniency,
      videoElm,
      writeCanvas,
      readCanvas,
      wrapper,
      frameRate,
    );
  };

  const createAndAnimate = () => {
    animation = createAnimation();
    animation?.animate(0);
  };

  window.addEventListener("resize", () => {
    if (animation) animation.delete();
    createAndAnimate();
  });

  createAndAnimate();
};

init();
