import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api";
const Header = () => {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  return (
    <Container>
        <Profile to="/Profile">
            <img 
            src={avatarUrl}
            alt="Imagem do usuario" 
            />

            <div>
                <span>Bem-vindo</span>
                <strong>{user.name}</strong>
            </div>
        </Profile>

        <Logout onClick={signOut}>
            <RiShutDownLine/>
        </Logout>
    </Container>
  )
}

export default Header