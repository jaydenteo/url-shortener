import { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import Form from "./components/Form";
import LinksList from "./components/LinksList";

function App() {
  // USESTATES
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);
  const [domain, setDomain] = useState("shrtco.de/")

  // USEEFFECTS
  useEffect(() => {
    getLocalLinks();
  }, []);

  useEffect(() => {
    saveLocalLinks();
  }, [links]);

  // FUNCTIONS
  // Save links links to local storage when links list is changed (useEffect)
  const saveLocalLinks = () => {
    localStorage.setItem("links", JSON.stringify(links));
  };

  // Load from local storage on page reload
  const getLocalLinks = () => {
    if (localStorage.getItem("links") === null) {
      localStorage.setItem("links", JSON.stringify([]));
    } else {
      let linkLocal = JSON.parse(localStorage.getItem("links"));
      setLinks(linkLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Make your links <span className="shorten">shorter</span></h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        links={links}
        setLinks={setLinks}
        domain={domain}
        setDomain={setDomain}
      />
      <LinksList links={links} setLinks={setLinks}/>
    </div>
  );
}

export default App;
