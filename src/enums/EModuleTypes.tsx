export const ModuleTypes = {
  OnlyImages: 'Apenas Imagens',
  OnlyTexts: 'Apenas Textos',
  TextsAndImages: 'Texto + Imagem',
  ShowCase: 'Vitrines',
} as const;

export type ModuleTypesType = keyof typeof ModuleTypes;

export default ModuleTypes;
