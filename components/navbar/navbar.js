const items = [
  { name: "Procesamiento de Imágen", link: "/" },
  { name: "Sobre nosotros", link: "/" },
];
const Navbar = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className="navbar-container" style={{ height: "100%" }} />

      <div style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0, paddingTop: '4rem' }}>
        <a href="/blog-computacion-visual">
          <div
            className="navbar-home"
            style={{
              margin: "0 auto",
              cursor: "pointer",
              display: "table",
            }}
          >
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              className="bi bi-house-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </div>
        </a>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
