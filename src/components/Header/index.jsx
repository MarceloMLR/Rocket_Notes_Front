import { Container, Profile, Logout } from "./styles"
import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api";
const Header = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    navigate("/")
    signOut()
  }
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

        <Logout onClick={handleSignOut}>
            <RiShutDownLine/>
        </Logout>
    </Container>
  )
}

export default Header