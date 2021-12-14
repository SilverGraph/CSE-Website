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
        "Paracosm is the official art and design society at IIIT- Bhubaneswar. Ever wondered how beautiful art can be, how a simple art on a paper depict a million words, then get started diving into the immense depths of creativity with a group passionate artists guiding you.",
      image2: Ecell,
      title2: "E-cell",
      content2:
        "Break the walls and Scale it up. The most active cell of IIIT-Bhubaneswar, E-Cell is a non-profit student's organization that works in the area of entrepreneurship & management and provides a platform to students, interested in entrepreneurship and who want to achieve success in this field.The cell organizes several activities for student development wherein the student gets an opportunity to explore themselves.",
    },
    {
      image1: TARS,
      title1: "TARS",
      content1:
        "TARS is the official Automation and Robotics Society of IIIT- Bhubaneswar. This society aims to work on Hardware Tech related innovations conducting various contests, hackathons, events, sessions, talk shows and a way more than that....",
      image2: cult,
      title2: "Cultural Society",
      content2:
        "Cultural Society of IIIT-Bhubaneswar is one of its own kind, which exclusively focuses on the Cultural Diversity of India taking into action a superfluity of events where anyone can display the ethnicity of the dynamicism in various art forms.",
    },
    {
      image1: FATS,
      title1: "FATS",
      content1:
        "The most engaging society of IIIT-Bhubaneswar, the Official Film and Theater Society entertains you through the engaging webseries, mesmerizing short films and the awakening acts, the one man army for full fleged entertainment is here.",
      image2: NAPS,
      title2: "NAPS",
      content2:
        "NAPS is the news and Publication Society of IIIT- Bhubaneswar which fosters the aim of writing among its members working with the motive of Learn and grow together. Feature your stories, writeups and experiences through the plethora of activities here at NAPS.",
    },
    {
      image1: psoc,
      title1: "PSoc",
      content1:
        "PSoC is a non-profit organization run by a few passionate engineering students of IIIT-Bhubaneswar who are crazy about software development working on multiple technologies and want to help others get started with it. It organizes hackathons, coding contests, events, webinars and a lot more...",
      image2: photogeeks,
      title2: "Photogeeks",
      content2:
        "The Face of IIIT-Bhubaneswar is none other than PhotoGeeks, the Official Photography Society of IIIT-Bhubaneswar. In the veins of these people flows the skill of capturing the world through the camera wiping out the evilic fear of missing out memories. The best 4 years of Engineering life can't be more memorable without these people capturing the moments we want to live forever.",
    },
    {
      image1: sports,
      title1: "Sports Society",
      content1:
        "Kreeda is the Official Sports society at IIIT- Bhubaneswar which truly believes in Health is the biggest weapon to lighten up the energetic soul along with the body driving a motive of success to conquer the paths of gloominess.",
      image2: vedanta,
      title2: "Vedanta Samiti",
      content2:
        "Vedanta Samiti aims to help people reach the acme of personality development, character build-up and individual growth, while serving the community and being grounded to the roots of religious and cultural knowledge. Vedanta Samiti aspires to help the budding talents by teaching them the skills of leadership, team work, ethics, accretion of confidence, selflessness, etc.",
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
