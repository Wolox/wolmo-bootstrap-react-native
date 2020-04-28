export function getCustomStyles(variants: string[], props: any, styles: any, stylePrefix: string = '') {
  return variants
    .map(variant => (props[variant] ? styles[`${variant}${stylePrefix}`] : null))
    .filter(style => style !== null);
}
