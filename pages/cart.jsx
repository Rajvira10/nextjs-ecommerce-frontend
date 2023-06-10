import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
`;

const CartPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default CartPage;
