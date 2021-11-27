import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home";
import Footer from "./components/Footer"
import Students from "./pages/Students/Students";
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import SocCard from "./pages/Resources/SocCard"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Students />
      <SocCard />
      <Login />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
