const Home = () => {
  const sectionStyles = {
    display: "flex",
    alignItems: "center",
    maxWidth: "700px",
    width: "100%"
  };
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <section style={sectionStyles}>
        <img
          src="https://picsum.photos/id/20/400/300.webp"
          alt="Desktop overview"
          style={{ padding: "8px" }}
        />
        <article style={{ padding: "8px" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            enim leo, lobortis et ornare sollicitudin, ullamcorper luctus ante.
            Fusce venenatis elit eget arcu ornare cursus. Cras eget turpis
            turpis. Suspendisse gravida eget ex non rutrum. Donec eu ullamcorper
            lectus. Duis accumsan lorem quis bibendum interdum. Morbi mattis
            tempus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean est metus, scelerisque et eleifend non, iaculis id lorem.
            Nulla a tellus sed eros elementum maximus vel et nibh. Nulla a
            gravida justo.
          </p>
        </article>
      </section>
    </div>
  );
};

export { Home };
