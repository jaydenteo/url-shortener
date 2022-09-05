import LinkItem from "./LinkItem";

const LinksList = ({ links, setLinks }) => {
  return (
    <div className="links-container">
      <ul className="links-list">
        {links.slice(0).reverse().map((link) => (
          <LinkItem
            key={link.id}
            text={link.text}
            link={link}
            links={links}
            setLinks={setLinks}
          />
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
