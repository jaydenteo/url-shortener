const LinkItem = ({ link, links, setLinks }) => {
  // FUNCTIONS
  // Delete link item
  const deleteHandler = () => {
    setLinks(links.filter((el) => el.id !== link.id));
  };

  // Copy link item
  const copyHandler = () => {
    links.map((item) => {
      if (item.id === link.id) {
        navigator.clipboard.writeText(link.text)
      }
    })
    
  }

  return (
    <div className="link">
      <li className="link-item"><a href={`https://${link.text}`} target="_blank">{link.text}</a></li>
      <button onClick={copyHandler} className="copyButton">
        <i className="fas fa-copy"></i>
      </button>
      <button onClick={deleteHandler} className="deleteButton">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default LinkItem;
