import EComplexity from './EComplexity';

export const ComplexityColorSet = {
  [EComplexity.HIGH]: ['#FF4545', '#FF4545', '#FF4545'],
  [EComplexity.MEDIUM]: ['#FFAB40', '#FFAB40', '#D9D9D9'],
  [EComplexity.LOW]: ['#67D03B', '#D9D9D9', '#D9D9D9'],
} as const;

export type ComplexityLevel = keyof typeof ComplexityColorSet;
