import { Container } from "./styles"


const Tag = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}

export default Tag