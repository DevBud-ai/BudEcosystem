type Kebab<
  T extends string,
  A extends string = ''
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

export type AffineNextLightColorScheme = typeof nextLightColorScheme;

export type AffineNextCssVariables = {
  [Key in `--affine-${Kebab<keyof AffineNextLightColorScheme>}`]: string;
};

// Refs: https://github.com/toeverything/AFFiNE/issues/1796
export const nextLightColorScheme = {
  brandColor: 'rgb(203, 144, 238)',
  tertiaryColor: 'rgb(243, 240, 255)',
  primaryColor: 'rgb(203, 144, 238)',
  secondaryColor: 'rgb(125, 145, 255)',
  backgroundSuccessColor: 'rgb(255, 255, 255)',
  backgroundErrorColor: 'rgba(255, 255, 255, 0.2)',
  backgroundProcessingColor: 'rgb(255, 255, 255)',
  backgroundWarningColor: 'rgb(255, 255, 255)',
  backgroundPrimaryColor: 'rgb(255, 255, 255)',
  backgroundOverlayPanelColor: 'rgb(251, 251, 252)',
  backgroundSecondaryColor: 'rgb(251, 250, 252)',
  backgroundTertiaryColor: 'rgb(233, 233, 236)',
  backgroundCodeBlock: 'rgb(250, 251, 253)',
  backgroundModalColor: 'rgba(0, 0, 0, 0.6)',
  textPrimaryColor: 'rgb(66, 65, 73)',
  textSecondaryColor: 'rgb(142, 141, 145)',
  textDisableColor: 'rgb(169, 169, 173)',
  textEmphasisColor: 'rgb(203, 144, 238)',
  hoverColor: 'rgba(0, 0, 0, 0.04)',
  linkColor: 'rgb(125, 145, 255)',
  quoteColor: 'rgb(100, 95, 130)',
  iconColor: 'rgb(119, 117, 125)',
  iconSecondary: 'rgba(119, 117, 125, 0.6)',
  borderColor: 'rgb(227, 226, 228)',
  dividerColor: 'rgb(227, 226, 228)',
  placeholderColor: 'rgb(192, 191, 193)',
  edgelessGridColor: 'rgb(230, 230, 230)',
  successColor: 'rgb(16, 203, 134)',
  warningColor: 'rgb(255, 99, 31)',
  errorColor: 'rgb(235, 67, 53)',
  processingColor: 'rgb(39, 118, 255)',
  black10: 'rgba(0, 0, 0, 0.1)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black50: 'rgba(0, 0, 0, 0.5)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black80: 'rgba(0, 0, 0, 0.8)',
  black90: 'rgba(0, 0, 0, 0.9)',
  black: 'rgb(0, 0, 0)',
  white10: 'rgba(255, 255, 255, 0.1)',
  white30: 'rgba(255, 255, 255, 0.3)',
  white50: 'rgba(255, 255, 255, 0.5)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white80: 'rgba(255, 255, 255, 0.8)',
  white90: 'rgba(255, 255, 255, 0.9)',
  white: 'rgb(255, 255, 255)',
  tagWhite: 'rgb(245, 245, 245)',
  tagGray: 'rgb(227, 226, 224)',
  tagRed: 'rgb(255, 225, 225)',
  tagOrange: 'rgb(255, 234, 202)',
  tagYellow: 'rgb(255, 244, 216)',
  tagGreen: 'rgb(223, 244, 232)',
  tagTeal: 'rgb(223, 244, 243)',
  tagBlue: 'rgb(225, 239, 255)',
  tagPurple: 'rgb(243, 240, 255)',
  tagPink: 'rgb(252, 232, 255)',
  paletteYellow: 'rgb(255, 232, 56)',
  paletteOrange: 'rgb(255, 175, 56)',
  paletteTangerine: 'rgb(255, 99, 31)',
  paletteRed: 'rgb(252, 63, 85)',
  paletteMagenta: 'rgb(255, 56, 179)',
  palettePurple: 'rgb(182, 56, 255)',
  paletteNavy: 'rgb(59, 37, 204)',
  paletteBlue: 'rgb(79, 144, 255)',
  paletteGreen: 'rgb(16, 203, 134)',
  paletteGrey: 'rgb(153, 153, 153)',
  paletteWhite: 'rgb(255, 255, 255)',
  paletteBlack: 'rgb(0, 0, 0)',
};

export const nextDarkColorScheme = {
  brandColor: 'rgb(203, 144, 238)',
  primaryColor: 'rgb(118, 95, 254)',
  secondaryColor: 'rgb(144, 150, 245)',
  tertiaryColor: 'rgb(30, 30, 30)',
  hoverColor: 'rgba(255, 255, 255, 0.1)',
  iconColor: 'rgb(168, 168, 160)',
  iconSecondary: 'rgba(168,168,160,0.6)',
  borderColor: 'rgb(57, 57, 57)',
  dividerColor: 'rgb(114, 114, 114)',
  placeholderColor: 'rgb(62, 62, 63)',
  quoteColor: 'rgb(147, 144, 163)',
  linkColor: 'rgb(185, 191, 227)',
  edgelessGridColor: 'rgb(49, 49, 49)',
  successColor: 'rgb(77, 213, 181)',
  warningColor: 'rgb(255, 123, 77)',
  errorColor: 'rgb(212, 140, 130)',
  processingColor: 'rgb(195, 215, 255)',
  textEmphasisColor: 'rgb(208, 205, 220)',
  textPrimaryColor: 'rgb(234, 234, 234)',
  textSecondaryColor: 'rgb(156, 156, 160)',
  textDisableColor: 'rgb(119, 117, 125)',
  black10: 'rgba(255, 255, 255, 0.1)',
  black30: 'rgba(255, 255, 255, 0.3)',
  black50: 'rgba(255, 255, 255, 0.5)',
  black60: 'rgba(255, 255, 255, 0.6)',
  black80: 'rgba(255, 255, 255, 0.8)',
  black90: 'rgba(255, 255, 255, 0.9)',
  black: 'rgb(255, 255, 255)',
  white10: 'rgba(0, 0, 0, 0.1)',
  white30: 'rgba(0, 0, 0, 0.3)',
  white50: 'rgba(0, 0, 0, 0.5)',
  white60: 'rgba(0, 0, 0, 0.6)',
  white80: 'rgba(0, 0, 0, 0.8)',
  white90: 'rgba(0, 0, 0, 0.9)',
  white: 'rgb(0, 0, 0)',
  backgroundCodeBlock: 'rgb(41, 44, 51)',
  backgroundTertiaryColor: 'rgb(30, 30, 30)',
  backgroundProcessingColor: 'rgb(255, 255, 255)',
  backgroundErrorColor: 'rgb(255, 255, 255)',
  backgroundWarningColor: 'rgb(255, 255, 255)',
  backgroundSuccessColor: 'rgb(255, 255, 255)',
  backgroundPrimaryColor: 'rgb(20, 20, 20)',
  backgroundSecondaryColor: 'rgb(32, 32, 32)',
  backgroundModalColor: 'rgba(0, 0, 0, 0.8)',
  backgroundOverlayPanelColor: 'rgb(30, 30, 30)',
  tagBlue: 'rgb(10, 84, 170)',
  tagGreen: 'rgb(55, 135, 79)',
  tagTeal: 'rgb(33, 145, 138)',
  tagWhite: 'rgb(84, 84, 84)',
  tagPurple: 'rgb(59, 38, 141)',
  tagRed: 'rgb(139, 63, 63)',
  tagPink: 'rgb(194, 132, 132)',
  tagYellow: 'rgb(187, 165, 61)',
  tagOrange: 'rgb(231, 161, 58)',
  tagGray: 'rgb(41, 41, 41)',
  paletteYellow: 'rgb(255, 232, 56)',
  paletteOrange: 'rgb(255, 175, 56)',
  paletteTangerine: 'rgb(255, 99, 31)',
  paletteRed: 'rgb(252, 63, 85)',
  paletteMagenta: 'rgb(255, 56, 179)',
  palettePurple: 'rgb(182, 56, 255)',
  paletteNavy: 'rgb(59, 37, 204)',
  paletteBlue: 'rgb(79, 144, 255)',
  paletteGreen: 'rgb(16, 203, 134)',
  paletteGrey: 'rgb(153, 153, 153)',
  paletteWhite: 'rgb(255, 255, 255)',
  paletteBlack: 'rgb(0, 0, 0)',
} satisfies AffineNextLightColorScheme;
