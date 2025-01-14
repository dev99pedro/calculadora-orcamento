export const ModuleIndicator = {
  timeToHide: 1500,
  added: 'Adicionado',
  removed: 'Removido',
} as const;

export type ModuleIndicatorType = keyof typeof ModuleIndicator;

export default ModuleIndicator;
