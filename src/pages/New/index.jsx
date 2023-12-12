import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Section from "../../components/Section";
import NoteItem from "../../components/NoteItem";
import Button from "../../components/Button";

const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Titulo" />

          <Textarea placeholder="Observações" />
          
          <Section title="Links Uteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section>
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
};

export default New;
