export enum Theme {
  Neutral = 'neutral',
  ReadyToAdd = 'readyToAdd',
  Selected = 'selected',
  Delete = 'delete',
}

export type ThemeType = keyof typeof Theme;

export default Theme;
