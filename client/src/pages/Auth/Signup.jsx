import React, { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
  FormControl,
  TextField,
} from "@mui/material"
import axios from "axios"
// import CloseIcon from "@mui/icons-material/Close";
// import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles"
import { Link} from "react-router-dom"
import BgStars from "../../components/background/BgStars"
import Navbar from "../../components/Navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

// const Input = styled('input')({
//   // display: 'none',
// });

export default function Login() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [file, setFile] = useState(null);

  // useEffect(() => {
  //   async function runAxios() {
  //     await axios({
  //       method: 'post',
  //       url: `127.0.0.1:5000/api/login`,
  //       headers: {email: mail, password: pass},
  //       withCredentials: true
  //     }).then((props) => {
  //         console.log(props)
  //     })
  //   }
  //   runAxios()
  // }, [])

  var formData = new FormData()
  formData.append('name',name)
  formData.append('email', mail);   //append the values with key, value pair
  formData.append('password', pass);
  formData.append('roll', "123")
  formData.append('batch',2020)
  // formData.append('image',file)
  
  async function handleSubmit() {
    formData.append('image',file)
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/api/register',
      data: formData,
      headers:{"Content-Type": "multipart/form-data"}, 
      withCredentials: true
    }).then((props) => {
        console.log(props)
      // localStorage.setItem('userid', props.data.id)
      // window.location= "/"
    }).catch(function (response) {
      console.log(response);
    });
    
    await axios.get("http://127.0.0.1:5000/api/checklogin")
      .then((props) => {
      console.log(props);
    })
  }

  return (
    <>
     <Navbar/>
      <BgStars />
      <ThemeProvider theme={darkTheme}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            minHeight: "90vh",
            padding: "20vh 50px",
          }}
        >
          <Card
            sx={{
              minWidth: 270,
              maxWidth: 800,
              textAlign: "center",
              padding: "20px 90px",
            }}
          >
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Signup
              </Typography>
              <Divider className="divider" sx={{ mb: 2 }} />
              <Typography variant="body2">New user? Register...</Typography>

              <FormControl variant="standard">
                <TextField
                  id="Name"
                  label="Name"
                  helperText="Enter your name"
                  variant="standard"
                  margin="dense"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                  id="Email"
                  label="Email"
                  helperText="Your institute email"
                  variant="standard"
                  margin="dense"
                  value={mail}
                  onChange={(e)=>setMail(e.target.value)}
                />
                <TextField
                  id="Password"
                  label="Password"
                  type="password"
                  helperText="Give a coded password"
                  variant="standard"
                  margin="dense"
                  value={pass}
                  onChange={(e)=>setPass(e.target.value)}
                />
                {/* <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" type="file" onChange={(e)=> setFile(e.target.files)}/>
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label> */}
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              </FormControl>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={handleSubmit}
                size="large"
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // startIcon={<GoogleIcon />}
              >
                Signup
              </Button>
            </CardActions>
            <div sx={{ padding: "0px" }}>
              <Link to="/login">
                <Button size="small" variant="text">
                  Already have an account?
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </ThemeProvider>
    </>
  )
}
