import { Container } from "./styles"


const ButtonText = ({title, ...rest}) => {
  return (
    <Container type="button" {...rest}>
        {title}
    </Container>
  )
}

export default ButtonText