import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home";
import Footer from "./components/Footer"
import Students from "./pages/Students/Students";
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Students />
      <Login />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
