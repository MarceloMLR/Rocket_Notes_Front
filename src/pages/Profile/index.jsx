import { Container, Form } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Profile = () => {
  return (
    <Container>
        <header>
            <a href="/">
                <FiArrowLeft/>
            </a>
        </header>

        <Form>
            <Input
                placeholder="Nome"
                type="text"
                icon= {FiUser}
            />

            <Input
                placeholder="E-mail"
                type="text"
                icon= {FiMail}
            />

             <Input
                placeholder="Senha Atual"
                type="password"
                icon= {FiLock}
            />

             <Input
                placeholder="Nova Senha"
                type="password"
                icon= {FiLock}
            />

            <Button title="Salvar"/>
        </Form>
    </Container>
  )
}

export default Profile