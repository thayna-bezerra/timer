import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' { //criando uma tipagem para o modulo npm (pega o que já tem adiciona algo novo)
  export interface defaultTheme extends ThemeType {}
}