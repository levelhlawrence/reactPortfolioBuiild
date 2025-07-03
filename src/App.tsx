import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
