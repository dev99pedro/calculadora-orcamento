export enum ThemeEnum {
  Neutral = 'Neutral',
  ReadyToAdd = 'ReadyToAdd',
  Selected = 'Selected',
  Delete = 'Delete',
}

export const ThemeDetails = {
  [ThemeEnum.Neutral]: { state: 'neutral', color: '#D0D0D0', borderWidth: '1px' },
  [ThemeEnum.ReadyToAdd]: { state: 'readyToAdd', color: '#3C7D7F', borderWidth: '2px' },
  [ThemeEnum.Selected]: { state: 'selected', color: '#3C7D7F', borderWidth: '2px' },
  [ThemeEnum.Delete]: { state: 'delete', color: '#FF4545', borderWidth: '2px' },
} as const;

export type ThemeType = ThemeEnum;
