import React, { useState } from "react"
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
// import CloseIcon from "@mui/icons-material/Close";
// import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link} from "react-router-dom"
import BgStars from "../../components/background/BgStars"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default function Login() {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  function handleSubmit() {
      // axios calls and other checks
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
                Login
              </Typography>
              <Divider className="divider" sx={{ mb: 2 }} />
              <Typography variant="body2"  >Hey! Welcome Again...</Typography>

              <FormControl variant="standard">
                <TextField
                  id="Email"
                  label="Email"
                  helperText="Your registered institute email"
                  variant="standard"
                  margin="dense"
                  value={mail}
                  onChange={(e)=>setMail(e.value)}
                />
                <TextField
                  id="Password"
                                  label="Password"
                                  type="password"
                  helperText="You remember your password right"
                  variant="standard"
                  margin="dense"
                  value={pass}
                  onChange={(e)=>setPass(e.value)}
                />
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
                Login
              </Button>
            </CardActions>
            <div sx={{ padding: "0px" }}>
              <Link to="/signup">
                <Button size="small" variant="text">
                  New user? Register first..
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </ThemeProvider>
    </>
  )
}
