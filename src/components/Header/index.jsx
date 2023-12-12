import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <Container>
        <Profile to="/Profile">
            <img 
            src="https://github.com/MarceloMLR.png" 
            alt="Imagem do usuario" 
            />

            <div>
                <span>Bem-vindo</span>
                <strong>Marcelo Lima</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>
    </Container>
  )
}

export default Header