declare const rgb2hex: {
	(rgb: string): HexColor
}

namespace rgb2hex {
    interface HexColor {
        hex: string,
        alpha: number
    }
}

export = rgb2hex