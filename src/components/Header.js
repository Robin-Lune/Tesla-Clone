import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const toggler = () => {
    burgerStatus ? setBurgerStatus(false) : setBurgerStatus(true);
  };
  return (
    <Container>
      <a href="#">
        <img src="./ressources/logo.svg" alt="logo Tesla" />
      </a>
      <CentralMenu>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Recharge</a>
        </li>
      </CentralMenu>
      <RightMenu>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">Compte TESLA</a>
        </li>
        <BurgerWrapper onClick={toggler}>
          <Burger close={burgerStatus}></Burger>
        </BurgerWrapper>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <li>
          <a href="#">VÉHICULES DISPONIBLES</a>
        </li>
        <li>
          <a href="#">VÉHICULES D'OCCASION'</a>
        </li>
        <li>
          <a href="#">REPRISE</a>
        </li>
        <li>
          <a href="#">FLOTTES &amp; ENTREPRISES</a>
        </li>
        <li>
          <a href="#">CYBERTRUCK</a>
        </li>
        <li>
          <a href="#">ROADSTER</a>
        </li>
        <li>
          <a href="#">ÉLECTRICITÉ POUR LES PROFESSIONNELS</a>
        </li>
        <li>
          <a href="#">INDUSTRIES</a>
        </li>
        <li>
          <a href="#">ÉNERGIE</a>
        </li>
        <li>
          <a href="#">ESSAIS</a>
        </li>
        <li>
          <a href="#">NOUS TROUVER</a>
        </li>
        <li>
          <a href="#">ÉVÉNEMENTS</a>
        </li>
        <li>
          <a href="#">ASSISTANCE</a>
        </li>
        <li>
          <a href="#">FRANCE</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  img {
    height: 10px;
    filter: invert();
  }
  z-index: 100;
`;

const CentralMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.85rem;
  list-style: none;
  transform: translateX(90px);
  @media screen and (max-width: 1200px) {
    display: none;
  }

  li {
    margin: 15px;

    a {
      color: black;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.85rem;
  list-style: none;
  li {
    margin: 15px;

    a {
      color: black;
    }
  }
`;
const BurgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alignt-items: center;
  width: 18px;
  height: 18px;
  cursor: pointer;
  z-index: 1000;
`;
const Burger = styled.div`
  width: 18px;
  height: 2px;
  background-color: ${(props) => (props.close ? "transparent" : "black")};
  &::before {
    position: absolute;
    content: "";
    background-color: black;
    top: 22px;
    right: 20px;
    height: 2px;
    width: 18px;
    transform: ${(props) =>
      props.close
        ? "rotate(-45deg) translateX(-3px) translateY(4px)"
        : "rotate(0deg)"};
        transition transform 0.2s ease-in-out;
  }
  &::after {
    position: absolute;
    content: "";
    background-color: black;
    top: 32px;
    right: 20px;
    height: 2px;
    width: 18px;
    transform: ${(props) =>
      props.close
        ? "rotate(45deg) translateX(-3px)translateY(-4px) "
        : "rotate(0deg)"};
        transition transform 0.2s ease-in-out;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: white;
  width: auto;
  z-index: 900;
  list-style: none;
  padding: 60px 20px;
  li {
    padding: 18px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      padding: 0 10px;
      color: black;
      font-size: 0.85em;
    }
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translate(100%)")};
  transition: transform 0.2s ease;
`;
