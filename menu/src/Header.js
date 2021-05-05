const Header = ({ menu, handleClick }) => {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  return (
    <section className="header">
      <article className="header-title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </article>
      <article className="category">
        {allCategories.map((item, index) => {
          return (
            <button key={index} onClick={() => handleClick(item)}>
              {item}
            </button>
          );
        })}
      </article>
    </section>
  );
};

export default Header;
