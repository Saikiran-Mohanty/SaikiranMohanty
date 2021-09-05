import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/ContactMe";
import Footer from "./components/footer";
import Particles from "react-particles-js";
function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
          number:{
            value: 40,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape: {
            type: "circle",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
      }
    }}
      />
    <Header/>
    <About/>
    <Services/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
