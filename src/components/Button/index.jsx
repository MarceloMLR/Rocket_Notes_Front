import {Container} from './styles'


export const Button = (props) => {

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

