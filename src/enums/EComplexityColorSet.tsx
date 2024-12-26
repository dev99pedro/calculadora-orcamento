export const ComplexityColorSet = {
  high: ['#FF4545', '#FF4545', '#FF4545'],
  medium: ['#FFAB40', '#FFAB40', '#D9D9D9'],
  low: ['#67D03B', '#D9D9D9', '#D9D9D9'],
} as const;

export type ComplexityLevel = keyof typeof ComplexityColorSet;
