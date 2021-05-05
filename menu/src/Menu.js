const Menu = ({ menu }) => {
  return (
    <section className="menu">
      {menu.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="menu-container">
            <div className="image">
              <img src={img} alt={title} />
            </div>
            <div className="menu-title">
              <h3 className="title">{title}</h3>
              <h3 className="price">${price}</h3>
            </div>
            <p className="menu-desc">{desc}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
