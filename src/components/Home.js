import React from "react";
import styled from "styled-components";
import Section from "./Section";
import ReactPageScroller from "react-page-scroller";

function Home() {
  return (
    <Container>
      <ReactPageScroller>
        <Section
          title="Model 3"
          backgroundImgDesktop="./ressources/m3-homepage-desktop.jpg"
          backgroundImgMobile="./ressources/m3-homepage-mobile.jpg"
          description="Réservez un essai sans contact"
          leftBtnText="CONFIGURATION PERSONNALISÉE"
          rightBtnText="VÉHICULES DISPONIBLES"
          comment="En savoir plus sur Tesla pour les entreprises"
          downArrow="yes"
        />
        <Section
          title="Model S"
          backgroundImgDesktop="./ressources/ms-homepage-desktop.jpg"
          backgroundImgMobile="./ressources/ms-homepage-mobile.jpg"
          description=""
          leftBtnText="CONFIGURATION PERSONNALISÉE"
          rightBtnText="VÉHICULES DISPONIBLES"
        />
        <Section
          title="Model X"
          backgroundImgDesktop="./ressources/mx-homepage-desktop.jpg"
          backgroundImgMobile="./ressources/mx-homepage-mobile.jpg"
          description=""
          leftBtnText="CONFIGURATION PERSONNALISÉE"
          rightBtnText="VÉHICULES DISPONIBLES"
          comment=""
        />
        <Section
          title="Model Y"
          backgroundImgDesktop="./ressources/Desktop-ModelY.jpg"
          backgroundImgMobile="./ressources/mobile-ModelY.jpg"
          description=""
          leftBtnText="EN SAVOIR PLUS"
          rightBtnText=""
          comment=""
        />
        <Section
          title="Systèmes d'énergie solaire et Powerwalls"
          backgroundImgDesktop="./ressources/Desktop-SolarPanels.jpg"
          backgroundImgMobile="./ressources/mobile-SolarPanels.jpg"
          description="De l’énergie pour tous vos besoins"
          leftBtnText="EN SAVOIR PLUS"
          rightBtnText=""
          comment=""
        />
        <Section
          title="Accessoires"
          backgroundImgDesktop="./ressources/Desktop-Accessories.jpg"
          backgroundImgMobile="./ressources/Desktop-Accessories.jpg"
          description=""
          leftBtnText="COMMANDER MAINTENANT"
          rightBtnText=""
          comment=""
        />
      </ReactPageScroller>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
