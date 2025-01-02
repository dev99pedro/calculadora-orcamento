export const ComplexityColorSet = {
  HIGH: ['#FF4545', '#FF4545', '#FF4545'],
  MEDIUM: ['#FFAB40', '#FFAB40', '#D9D9D9'],
  LOW: ['#67D03B', '#D9D9D9', '#D9D9D9'],
} as const;

export type ComplexityLevel = keyof typeof ComplexityColorSet;
