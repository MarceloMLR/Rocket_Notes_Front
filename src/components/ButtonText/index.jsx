import { Container } from "./styles"


const ButtonText = ({title, isActive = "false", ...rest}) => {
  return (
    <Container 
    type="button"
     {...rest}
     $isactive={isActive.toString()}
     >
        {title}
    </Container>
  )
}

export default ButtonText