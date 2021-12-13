import React, { useState } from "react"
import { Button } from "@mui/material"
import Card from "./Card"
import "./Students.css"
import { senos } from "./senior"
import { junos } from "./junior"
import BgStars from "../../components/background/BgStars"
import Navbar from "../../components/Navbar";

export default function Students() {
  const [senior, setSenior] = useState(false)
  const [batch, getDetail] = useState(junos)

  const displayUsers = batch.map((user, index) => {
    return <Card key={index} index={index} user={user} />
  })
  function seniors() {
    return (
      <>
        <div className="container">
          <h2 className="heading m-4"> 2020 STUDENTS</h2>
          <div className="row g-xs-1 gy-3 gx-5 mx-xs-2 Row">{displayUsers}</div>
        </div>
      </>
    )
  }

  function juniors() {
    return (
      <>
        <div className="container">
          <h2 className="heading m-4">2021 STUDENTS</h2>
          <div className="row g-xs-1 gy-3 gx-3 mx-xs-2 Row">{displayUsers}</div>
        </div>
      </>
    )
  }
  return (
    <>
      <BgStars />
      <Navbar/>
      <div style={{ zIndex: "1" }} className="studentHome mt-3">
        <center>
          <div className="student">. KNOW . CONNECT . GROW .</div>
          <div style={{display: "flex",
                justifyContent: "center",}}>
          <Button
            onClick={() => {
              setSenior(true)
              getDetail(senos)
            }}
            size="large"
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "1vw"
            }}
            // startIcon={<GoogleIcon />}
          >
            2020
          </Button>
          <Button
            onClick={() => {
              setSenior(false)
              getDetail(junos)
            }}
            size="large"
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            // startIcon={<GoogleIcon />}
          >
            2021
            </Button>
            </div>
          {senior ? seniors() : juniors()}
        </center>
      </div>
    </>
  )
}
