import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #222;
  padding: ;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Center>
        <Logo href="/">Ecommerce</Logo>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>All Products</Link>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/account"}>Account</Link>
          <Link href={"/cart"}>Cart (0)</Link>
        </nav>
      </Center>
    </StyledHeader>
  );
};

export default Header;
