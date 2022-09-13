import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/layout/Header";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

function App() {
  return (
    <div className="App d-flex">
      <div className="sidebar my-auto"><Sidebar/></div>
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
