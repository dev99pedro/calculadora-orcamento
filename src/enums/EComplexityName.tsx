export const ComplexityName = {
  HIGH: 'Alta',
  MEDIUM: 'Média',
  LOW: 'Baixa',
} as const;

export type ComplexityNameType = keyof typeof ComplexityName;
