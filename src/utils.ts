import { Box } from "./types/Box.ts";

export interface ConstructScaleDimensionsParams {
  targetWidth: number;
  targetHeight: number;
  sourceWidth: number;
  sourceHeight: number;
  useMin?: boolean;
}

export interface ConstructScaleDimensionsResult extends Box {
  ratio: number;
}

export const constructScaleDimensions = (
  params: ConstructScaleDimensionsParams,
): ConstructScaleDimensionsResult => {
  const {
    targetWidth,
    targetHeight,
    sourceWidth,
    sourceHeight,
    useMin = false,
  } = params;

  const wRatio = targetWidth / sourceWidth;
  const hRatio = targetHeight / sourceHeight;

  const ratio = useMin ? Math.min(wRatio, hRatio) : Math.max(wRatio, hRatio);

  const scaledWidth = ratio * sourceWidth;
  const scaledHeight = ratio * sourceHeight;

  const offSetX = (targetWidth - scaledWidth) / 2;
  const offSetY = (targetHeight - scaledHeight) / 2;

  return {
    x: offSetX,
    y: offSetY,
    w: scaledWidth,
    h: scaledHeight,
    ratio,
  };
};
