import { useState } from 'react';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Link } from 'react-router-dom';
import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

const Profile = () => {
const { user, updateProfile } = useAuth();
const [name, setName] = useState(user.name);
const [email, setEmail] = useState(user.email);
const [oldPasswod, setOldPassword] = useState();
const [newPassword, setNewPassword] = useState();
const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
const [avatar, setAvatar] = useState(avatarUrl);
const [avatarFile, setAvatarFile] = useState(null)


async function handleUpdate(){
    const updated = {
        name,
        email,
        password: newPassword,
        old_password: oldPasswod
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
}

function handleAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
}

  return (
    <Container>
        <header>
            <Link to="/">
                <FiArrowLeft/>
            </Link>
        </header>

        <Form>

            <Avatar>
                <img src={avatar} alt="Foto do usuario" />
                <label htmlFor="avatar">
                    <FiCamera/>

                    <input 
                        id="avatar"
                        type="file"
                        onChange={handleAvatar}
                    />
                </label>
            </Avatar>

            <Input
                placeholder="Nome"
                type="text"
                icon= {FiUser}
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

             <Input
                placeholder="Senha Atual"
                type="password"
                icon= {FiLock}
                onChange={e => setOldPassword(e.target.value)}
            />

             <Input
                placeholder="Nova Senha"
                type="password"
                icon= {FiLock}
                onChange={e => setNewPassword(e.target.value)}
            />

            <Button title="Salvar" onClick={handleUpdate}/>
        </Form>
    </Container>
  )
}

export default Profile