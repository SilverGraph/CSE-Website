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
        "Ever wondered how beautiful art can be, how a simple art on a paper depict a million words, then get started diving into the immense depths of creativity with a group passionate artists guiding you.",
      
    },
    {  
      image1: Ecell,
      title1: "E-Cell",
      content1:
        "Break the walls and Scale it up. The most active cell of IIIT-Bhubaneswar, E-Cell is a student's organization that works in the area of entrepreneurship & management and provides a platform to students interested in entrepreneurship who want to achieve success in this field. The cell organizes several activities for student development wherein students get opportunities to explore themselves.",
    },
    {
      image1: TARS,
      title1: "TARS",
      content1:
        "The Automation and Robotics Society aims to work on hardware tech. related innovations conducting various contests, events, sessions, talk shows and a way more than that....",
    }, 
    {  
      image1: cult,
      title1: "Cult Society",
      content1:
        "The Cultural Society is one of its own kind, which exclusively focuses on the cultural diversity where anyone can display the ethnicity of the dynamism in various art forms.",
    },
    {
      image1: FATS,
      title1: "FATS",
      content1:
        "The most engaging society, the Film and Theater Society entertains you through the engaging web-series, mesmerizing short films and the awakening acts, the one man army for full-fledged entertainment is here.",
    },
    {  
      image1: NAPS,
      title1: "NAPS",
      content1:
        "The News And Publication Society fosters the aim of writing among its members working with the motive to learn and grow together. Get your stories, writeups and experiences featured through the plethora of activities here at NAPS.",
    },
    {
      image1: psoc,
      title1: "PSoc",
      content1:
        "We at Proramming Society believe in love for programming and community driven efforts to build a community of enthusiastic and dedicated programmers who believe in learning and developing together.",
    },
    {  
      image1: photogeeks,
      title1: "Photogeeks",
      content1:
        "The face of institution, it is none other than PhotoGeeks, the Official Photography Society of IIIT-Bhubaneswar. In the veins of these people flows the skill of capturing the world through the camera wiping out the fear of missing out memories. The best 4 years of Engineering life can't be more memorable without these people capturing unforgettable moments",
    },
    {
      image1: sports,
      title1: "Sports Society",
      content1:
        "Krida is the Official Sports society at IIIT- Bhubaneswar which truly believes in Health is the biggest weapon to lighten up the energetic soul along with the body driving a motive of success to conquer the paths of gloominess.",
    },
    {  
      image1: vedanta,
      title1: "Vedanta Samiti",
      content1:
        "Vedanta Samiti aims to help people reach the acme of personality development, character build-up and individual growth, while serving the community and being grounded to the roots of religious and cultural knowledge. Vedanta Samiti aspires to help the budding talents by teaching them the skills of leadership, team work, ethics, accretion of confidence, selflessness, etc.",
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
