import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    bodyColor: string;
    cardColor: string;
    textColor: string;
  }
}