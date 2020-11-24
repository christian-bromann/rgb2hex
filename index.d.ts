declare module "rgb2hex" {
    interface HexColor {
        hex: string,
        alpha: number
    }

    type rgb2hex = (color: string) => HexColor

    export default rgb2hex
}