import { Container, Form, Background } from './styles';
import { FiUser, FiLock, FiMail} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp = () => {
  return (
    <Container>

      <Background/>
        <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>Crie sua conta</h2>

            <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            />

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

            <Button title="Cadastrar"/>

            <Link to="/">Voltar para login</Link>

        </Form>

     
        
    </Container>
    
  )
}

export default SignUp