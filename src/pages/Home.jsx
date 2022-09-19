import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/layout/Header";
import Work from "../components/Work";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Work />
      <Contact />
      {/* <BrowserRouter>
          <Routes>
          <Route path="/" element={<Header />}></Route>
            <Route path="/" element={<About />}></Route>
            <Route path="/" element={<Experience />}></Route>
            <Route path="/" element={<Work />}></Route>
            <Route path="/" element={<Contact />}></Route>
          </Routes>
          </BrowserRouter> */}
    </div>
  );
}

export default Home;
