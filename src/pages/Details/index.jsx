import { Container, Links } from "./styles"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Section from "../../components/Section"
import Tag from "../../components/Tag"
import ButtonText from "../../components/ButtonText"



 const Details = () => {
  return (
    <Container>
      <Header/>

      <ButtonText title="Excluir Nota"/>

      <Section title="Links úteis">
      <Links>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title = "express"/>
        <Tag title = "nodejs"/>
      </Section>

      
      <Button title="Voltar"/>
    </Container>
  )
}

export default Details