import {Container} from './styles'


const Button = (props) => {

    const {title, loading = false, ...rest} = props

    return (
        <Container 
        type='button'
        disabled={loading}
        {...rest}
        >
            {loading ? 'Carregando' : title}
        </Container>
    )
}

export default Button
