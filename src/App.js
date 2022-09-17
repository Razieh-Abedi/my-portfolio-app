import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/layout/Header";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
