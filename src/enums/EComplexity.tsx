export const Complexity = {
  HIGH: 'Alta',
  MEDIUM: 'Média',
  LOW: 'Baixa',
} as const;

export type ComplexityType = keyof typeof Complexity;

export default Complexity;
