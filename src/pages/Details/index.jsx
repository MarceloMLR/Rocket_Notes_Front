import { Container, Links, Content } from "./styles"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Section from "../../components/Section"
import Tag from "../../components/Tag"
import ButtonText from "../../components/ButtonText"



 const Details = () => {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

 async function handleDelete() {
    const confirm = window.confirm("Deseja realmente deletar essa nota?")
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote();
  },[])

  return (
    <Container>
      <Header/>
      { data &&
      <main>
        <Content>

      
          <ButtonText
           title="Excluir Nota"
           onClick={handleDelete}
           />

          <h1>{data.title}</h1>

          <p>
            {data.description}
          </p>
          { data.links &&
          <Section title="Links úteis">
            <Links>
              {
              data.links.map(link => (
                <li key={String(link.id)}>
                  <a 
                  href={link.url}
                  target="_blank"
                  >{link.url}
                  </a>
                </li>
                ))
               }
              </Links>
          </Section>
           }
           {
            data.tags &&
            
          <Section title="Marcadores">
            { data.tags.map(tag => (
            <Tag
            key={String(tag.id)}
             title = {tag.name}
             />
            ))
            }
         
          </Section>
          }
          
          <Button
           title="Voltar"
           onClick={handleBack}
           />
        </Content>
      </main>
      }
    </Container>
  )
}

export default Details
