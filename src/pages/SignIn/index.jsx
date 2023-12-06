import { Container, Form, Background } from './styles';
import { FiLogIn, FiLock, FiMail} from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn = () => {
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

            <a href="#">Criar Conta</a>

        </Form>

        <Background/>
        
    </Container>
    
  )
}

export default SignIn