import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Section from "../../components/Section";
import NoteItem from "../../components/NoteItem";

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

          <Textarea placeholder="Observações" />
          
          <Section title="Links Uteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
        </Form>
      </main>
    </Container>
  );
};

export default New;
