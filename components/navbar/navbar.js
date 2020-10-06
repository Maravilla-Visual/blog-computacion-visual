import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const items = [
  {
    name: "Análisis de imagen",
    items: [{ name: "Promedio rgb", link: "/blog-computacion-visual/projects/promedio_rgb" },
            { name: "Luma", link: '/blog-computacion-visual/projects/luma'},
            { name: "Blur", link: '/blog-computacion-visual/projects/blur'},
            { name: "Histograma", link: '/blog-computacion-visual/projects/histograma'}],
  },
  { name: "Sobre nosotros", link: "/blog-computacion-visual/about" },
];

const ItemComponents = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const onTitleClick = (index) => {
    const newSelectedIndexes = [...selectedIndexes];

    if (selectedIndexes.includes(index)) {
      const keyIndex = selectedIndexes.indexOf(index);
      newSelectedIndexes.splice(keyIndex, 1);
      setSelectedIndexes(newSelectedIndexes);
    } else {
      newSelectedIndexes.push(index);
      setSelectedIndexes(newSelectedIndexes);
    }
  };

  return items.map((item, index) => {
    const isTitle = item.link ? false : true;
    const isTitleSelected = selectedIndexes.includes(index);

    return (
      <>
        <Row>
          <Col xs={12} className="sidebar-item">
            <a
              {...(!isTitle ? { href: item.link } : {})}
              className= "navbar-title"
              onClick={() => {
                if (isTitle) onTitleClick(index);
              }}
            >
              <p>{item.name}</p>
            </a>
          </Col>
        </Row>
        {isTitleSelected &&
          item.items.map((subItem, subIndex) => (
            <Row>
              <Col xs={12} className="sidebar-item__subtitle">
                <a
                  href={subItem.link}
                  className="navbar-subtitle"
                  style={{ float: "right", marginRight: "1rem" }}
                >
                  <p>{subItem.name}</p>
                </a>
              </Col>
            </Row>
          ))}
      </>
    );
  });
};

const Navbar = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className="navbar-container" style={{ height: "100%" }} />

      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          paddingTop: "4rem",
        }}
      >
        <div
          className="navbar-home"
          style={{
            margin: "0 auto",
            cursor: "pointer",
            display: "table",
          }}
        >
          <a href="/blog-computacion-visual">
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              className="bi bi-house-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="home-button"
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
          </a>
        </div>

        <div style={{ marginTop: "5rem" }}>
          <ItemComponents />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
