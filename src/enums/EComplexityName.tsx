export const ComplexityName = {
  high: 'Alta',
  medium: 'Média',
  low: 'Baixa',
} as const;

export type ComplexityNameType = keyof typeof ComplexityName;
