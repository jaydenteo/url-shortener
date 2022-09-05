const Form = ({ input, setInput, links, setLinks, domain, setDomain }) => {
  // FUNCTIONS
  // Set input of search box
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // On submit, call shrtcode api and clear search box (if success)
  const submitHandler = async (e) => {
    e.preventDefault();

    const endpoint = new URL(`https://api.shrtco.de/v2/shorten?url=${input}`);
    const response = await fetch(endpoint);
    const data = await response.json();

    setLinks([
      ...links,
      {
        id: Math.random() * 1000,
        text: domain + data.result.code,
      },
    ]);
    setInput("");
  };

  // Set dropdown domains
  const domainHandler = (e) => {
    setDomain(e.target.value);
  };

  return (
    <form>
      <div className="select">
        <select onChange={domainHandler} name="domains">
          <option value="shrtco.de/">shrtco.de/</option>
          <option value="9qr.de/">9qr.de/</option>
          <option value="shiny.link/">shiny.link/</option>
        </select>
      </div>
      <input
        onChange={inputHandler}
        value={input}
        type="text"
        placeholder="example.com"
      />
      <button onClick={submitHandler} type="submit">
        <i className="fas fa-arrow-right"></i>
      </button>
    </form>
  );
};

export default Form;
