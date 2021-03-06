import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            backgroundText: string;
            backgroundLightText: string;
            backgroundShadow: string;
            backgroundShadowStack: string;
            card: string;
            cardHover: string;
            cardHoverBorder: string;
            cardBorder: string;
            cardText: string;
            cardLightText: string;
        };
        fonts: {
            mainFamily: string;
            mainSize: string;
            mainWeight: string;
            mainWeightBold: string;
            titleFamily: string;
            titleSize: string;
            titleWeight: string;
        };
        layout: {
            cardCornerRadius: string;
        };
    }
}
