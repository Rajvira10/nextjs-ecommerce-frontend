import React from "react";
import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #eee;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;
const Featured = () => {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>Pro anywhere</Title>
            <Desc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate expedita iste aspernatur et maxime labore, voluptatem
              aperiam cum, maiores earum facere nobis unde fugiat excepturi
              natus dolorum assumenda, quae veniam perspiciatis officia dolor.
              Veniam voluptatibus temporibus nesciunt reiciendis explicabo
            </Desc>
          </div>
          <div></div>
        </Wrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
