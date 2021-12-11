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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const Input = styled('input')({
  display: 'none',
});

export default function Login() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

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

  async function handleSubmit() {
    console.log(mail, name);
    await axios({
      method: 'POST',
      url: `http://127.0.0.1:5000/api/register`,
      headers: {
        name: "name",
        email: "mail", 
        password: "pass",
        batch: 2020,
        roll: 48,
      },
      withCredentials: true
    }).then((props) => {
        console.log(props)
    })
  }

  return (
    <>
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
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" multiple type="file" />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
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
