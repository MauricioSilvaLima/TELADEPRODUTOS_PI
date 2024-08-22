import { Container, Image, Title, Description } from "./styles";

function Card(props) {
  const { product } = props;

  return (
    <>
      <Container>
        <Image src={product.image} />
        <div>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </div>
      </Container>
    </>
  );
}

export default Card;
