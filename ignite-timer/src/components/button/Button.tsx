import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant: ButtonVariant; //Define o tipo de estilo que o botão terá
}

export function Button({variant = 'primary'}:ButtonProps) { //Caso a propriedade não seja passada no componente, será utilizado o valor 'primary' como padrão
  return (
    <ButtonContainer variant={variant}>Enviar</ButtonContainer> //Renderizando o componente ButtonContainer
  )
}