import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";

const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Titulo" />
        </Form>
      </main>
    </Container>
  );
};

export default New;
