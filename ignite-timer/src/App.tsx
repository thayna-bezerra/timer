import { ThemeProvider } from 'styled-components';
import { Button } from "./components/button/Button";
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Button variant={'primary'}></Button>
      <Button variant={'secondary'}></Button>
      <Button variant={'danger'}></Button>
      <Button variant={'success'}></Button>

      <GlobalStyle />
    </ThemeProvider >
  )
}