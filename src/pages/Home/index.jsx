import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import {Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import Section from '../../components/Section'
import Note from '../../components/Note'
import { api } from '../../services/api'
const Home = () => {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState('');
    const [notes, setNotes] = useState(['']);
    const navigate = useNavigate();

    function handleTagSelected(tagName){
        if (tagName === "all") {
            return setTagsSelected([])
        }
        const alreadySelected = tagsSelected.includes(tagName)
        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
            
        } else {
            setTagsSelected(prevState => [... prevState, tagName])
        }
        
    }
    function handleTagDetails(id){
        navigate(`/details/${id}`)
    }
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data)
        };
        fetchTags();
    },[]);

    useEffect(
        () => {
            async function fetchNotes() {
                //Tratamento para caracteres especiais que tem função especifica na URL como #
                const encodedTagsSelected = encodeURIComponent(tagsSelected);
                const encodedSeach = encodeURIComponent(search);
                const response = await api.get(`/notes?title=${encodedTagsSelected}&tags=${encodedSeach}`)
                
                setNotes(response.data)
                
            }

            fetchNotes()
            
        }, [tagsSelected, search]
    );

  return (
    <Container>
        <Brand>
            <h1>Rocketnotes</h1>
        </Brand>

        <Header/>

        <Menu>
            <li>
                <ButtonText 
                title="Todos" 
                onClick={() => handleTagSelected("all")}
                isActive={tagsSelected.length === 0}
                />
            </li>
            { tags && tags.map(tag => (
                <li key={String(tag.id)}>
                    <ButtonText 
                    title={tag.name}
                    onClick={() => handleTagSelected(tag.name)}
                    isActive={tagsSelected.includes(tag.name)}
                    />
                </li>
                ))
            }
            
        </Menu>

        <Search>
            <Input 
            placeholder="Pesquise pelo titulo" 
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
            />
        </Search>
           
        <Content>
            <Section title="Minhas Notas">
                { notes.map(note =>(
                <Note 
                key={String(note.id)}
                data={note} 
                onClick={() => handleTagDetails(note.id)}
                />
                ))}
            </Section>
        </Content>

        <NewNote to="New">
            <FiPlus/>
            Criar Nota
        </NewNote>
    </Container>
  )
}

export default Home