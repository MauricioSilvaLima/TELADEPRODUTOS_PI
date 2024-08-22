import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  margin: 10px;
  border-radius: 20px;
  padding: 15px;
  overflow: hidden;
  border: 1px solid black;
  background-color: white;

  div {
    padding: 20px;
  }
`;

export const Image = styled.div`
  height: 400px;

  background-image: url(${(props) => props.src});

  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1``;

export const Description = styled.p``;
