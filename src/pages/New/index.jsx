import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Section from "../../components/Section";
import NoteItem from "../../components/NoteItem";
import Button from "../../components/Button";
import { api } from "../../services/api";

const New = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();

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

  async function handleNewNote() {
    if(!title) {
      alert("Você esqueceu de adicionar um titulo a sua nota.")
    }
    if(newTag) {
      alert("Você esqueceu de clicar em adicionar uma tag")
    }
    
    if(newLink) {
      alert("Você esqueceu de clicar em adicionar um link")
    }
    await api.post("/notes",{
      title,
      description,
      tags,
      links
    });
    alert("Nota criada com sucesso!");
    navigate(-1)
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
          <Input 
            placeholder="Titulo" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea 
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
           />
          
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

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  );
};

export default New;
