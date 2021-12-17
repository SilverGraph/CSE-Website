import React from "react";
import "./Resources.css";
import psoc from "./logos/psoc.png";
import paracosm from "./logos/paracosm.png";
import Ecell from "./logos/Ecell.png";
import cult from "./logos/cult.png";
import FATS from "./logos/FATS.png";
import NAPS from "./logos/NAPS.png";
import photogeeks from "./logos/photogeeks.png";
import sports from "./logos/sports.png";
import TARS from "./logos/TARS.png";
import vedanta from "./logos/vedanta.png";
import { Container, Row } from "react-bootstrap";
import Card1 from "./Card1";
import BgStars from "../../components/background/BgStars";

export default function SocCard() {

  const cardsArray = [
    {
      image1: paracosm,
      title1: "Paracosm",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
      
    },
    {  
      image1: Ecell,
      title1: "E-cell",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: TARS,
      title1: "TARS",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    }, 
    {  
      image1: cult,
      title1: "Cultural Society",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: FATS,
      title1: "FATS",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {  
      image1: NAPS,
      title1: "NAPS",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: psoc,
      title1: "PSoc",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {  
      image1: photogeeks,
      title1: "Photogeeks",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: sports,
      title1: "Sports Society",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {  
      image1: vedanta,
      title1: "Vedanta Samiti",
      content1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
  ];
  return (
      <>
      <BgStars />
        <div className="societies">
        <Container className="container1">
          <>
            {cardsArray.map((element) => (
            <Row key={element.title1} className="rows">
                <Card1
                title={element.title1}
                content={element.content1}
                image={element.image1}
                />
                {/* <Card2
                title={element.title2}
                content={element.content2}
                image={element.image2}
                /> */}
            </Row>
            ))}
          </>
        </Container>
        </div>
    </>
  );
}
