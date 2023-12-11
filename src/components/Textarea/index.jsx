import { Container } from "./styles";

const Textarea = ({ value, ...rest }) => {
  return <Container {...rest}>{value}</Container>;
};

export default Textarea;
