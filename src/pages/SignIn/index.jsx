import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiLock, FiMail} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
        <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>Faça seu login</h2>

            <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            />

            <Input
            placeholder="Senha"
            type="pasword"
            icon={FiLock}
            />

            <Button title="Entrar"/>

            <Link to="/register">Criar Conta</Link>

        </Form>

        <Background/>
        
    </Container>
    
  )
}

export default SignIn