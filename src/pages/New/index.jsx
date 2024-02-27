import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Section from "../../components/Section";
import NoteItem from "../../components/NoteItem";
import Button from "../../components/Button";

const New = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
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
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  placeholder="Novo Link" 
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                  />
              ))
            }
            <NoteItem
             isNew 
             placeholder="Novo Link" 
             value={newLink}
             onChange={e => setNewLink(e.target.value)}
             onClick={handleAddLink}
             />
          </Section>

          <Section>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => {handleRemoveTag(tag)}} 
                  />
                ))
                
              }
              <NoteItem
                isNew
                placeholder="Nova tag" 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
};

export default New;
