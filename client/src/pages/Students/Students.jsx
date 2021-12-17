import React, { useState, useEffect } from "react"
import { Button } from "@mui/material"
import Card from "./Card"
import "./Students.css"
// import { senos } from "./senior"
// import { junos } from "./junior"
import BgStars from "../../components/background/BgStars"
import axios from "axios"
import { useHistory } from "react-router-dom"

export default function Students() {
  const [senior, setSenior] = useState(false)
  // eslint-disable-next-line
  // const [batch, getDetail] = useState(junos)
  const [auth, setAuth] = useState(true)
  const [batch2020, setBatch2020] = useState([])
  const [batch2021, setBatch2021] = useState([])

  const history = useHistory()

  useEffect(() => {
    async function checkAuth() {
      await axios({
          method: 'get',
          url: 'https://cse-2k25.herokuapp.com/api/checklogin',
          withCredentials: true
      }).then((props) => {
          // console.log(props.data.Status)
          setAuth(props.data.Status)
      }).catch(function (response) {
          console.log(response);
      });
    }
    checkAuth()

    async function fetchData() {
      // FETCH DATA FOR BATCH-2020
      await axios({
        method: 'get',
        url: 'https://cse-2k25.herokuapp.com/students/2020',
        withCredentials: true
      }).then(async res => {
          // console.log(res.data.students)
          setBatch2020(Object.keys(res.data.students).map(key => {return res.data.students[key]}))
      }).catch(function (response) {
          console.log(response);
      });

      // FETCH DATA FOR BATCH-2020
      await axios({
        method: 'get',
        url: 'https://cse-2k25.herokuapp.com/students/2021',
        withCredentials: true
      }).then(async res => {
          // console.log(res.data.students)
          setBatch2021(Object.keys(res.data.students).map(key => {return res.data.students[key]}))
      }).catch(function (response) {
          console.log(response);
      });
    }
    auth && fetchData()
    // console.log(batch2020);
    // eslint-disable-next-line
  }, [auth])

  const displaySeniors = batch2020.map((user, index) => {
    return <Card key={index} index={index} user={user} />
  })
  const displayJuniors = batch2021.map((user, index) => {
    return <Card key={index} index={index} user={user} />
  })

  function seniors() {
    return (
      <>
        <div className="container" style={{marginTop: "0"}}>
          <h2 className="heading m-4"> 2020 STUDENTS</h2>
          <div className="row g-xs-1 gy-3 gx-5 mx-xs-2 Row">{displaySeniors}</div>
        </div>
      </>
    )
  }

  function juniors() {
    return (
      <>
        <div className="container" style={{marginTop: "0"}}>
          <h2 className="heading m-4">2021 STUDENTS</h2>
          <div className="row g-xs-1 gy-3 gx-3 mx-xs-2 Row">{displayJuniors}</div>
        </div>
      </>
    )
  }

  function returnHome() {
    history.push("/login")
    return null
  }
  
  return (
    !auth ? returnHome() :
    <>
      <BgStars />
      <div style={{ zIndex: "1" }} className="studentHome mt-3">
        <center>
          <div className="student">. KNOW . CONNECT . GROW .</div>
          <div style={{display: "flex",
                justifyContent: "center",}}>
          <Button
            color="inherit"
            onClick={() => {
              setSenior(true)
              // getDetail(senos)
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
            color="inherit"
            onClick={() => {
              setSenior(false)
              // getDetail(junos)
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
