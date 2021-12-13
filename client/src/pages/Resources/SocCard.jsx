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
import { Container } from "react-bootstrap";
import Card1 from "./Card1";
import Card2 from "./Card2";
import BgStars from "../../components/background/BgStars";
import Navbar from "../../components/Navbar";
export default function SocCard() {
  const cardsArray = [
    {
      image1: paracosm,
      title1: "Paracosm",
      content1:
        "content 1 hereLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
      image2: Ecell,
      title2: "E-cell",
      content2:
        "content 2 here Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: TARS,
      title1: "TARS",
      content1:
        "content 1 hereLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
      image2: cult,
      title2: "Cultural Socitie",
      content2:
        "content 2 here Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: FATS,
      title1: "FATS",
      content1:
        "content 1 hereLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
      image2: NAPS,
      title2: "NAPS",
      content2:
        "content 2 here Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: psoc,
      title1: "PSoc",
      content1:
        "content 1 hereLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
      image2: photogeeks,
      title2: "Photogeeks",
      content2:
        "content 2 here Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
    {
      image1: sports,
      title1: "Sports Society",
      content1:
        "content 1 hereLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
      image2: vedanta,
      title2: "Vedanta Samiti",
      content2:
        "content 2 here Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae blanditiis sapiente totam itaque adipisci saepe id maxime cupiditate laborum.",
    },
  ];
  return (
      <>
      <Navbar/>
      <BgStars />
        <div className="societies">
        <Container>
            {cardsArray.map((element) => (
            <div className="rows" key={element.title1}>
                <Card1
                title={element.title1}
                content={element.content1}
                image={element.image1}
                />
                <Card2
                title={element.title2}
                content={element.content2}
                image={element.image2}
                />
            </div>
            ))}
        </Container>
        </div>
    </>
  );
}
