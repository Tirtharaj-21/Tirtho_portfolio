import "./App.css";
import About from "./component/About";
import Available from "./component/Available";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Newlearning from "./component/Newlearning";
import Project from "./component/Project";
import Service from "./component/Service";
import Skills from "./component/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Newlearning />
      <Service />
      <Available />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
