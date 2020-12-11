export as namespace rgb2hex;

export interface HexColor {
    hex: string,
    alpha: number
}

export function rgb2hex(rgb: string): HexColor;