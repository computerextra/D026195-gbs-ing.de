import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Datenschutz from "./Datenschutz";
import Home from "./Home";
import useTheme from "./Hooks/useTheme";
import Impressum from "./Impressum";

function App() {
  useTheme();

  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <Container fluid={"sm"} className="mt-4 border border-2 rounded">
      <h1 className="mb-5">GBS - Green Building Solutions GmbH</h1>
      {(showImpressum || showDatenschutz) && (
        <>
          <span
            role="button"
            className="text-decoration-underline text-primary"
            onClick={() => {
              setShowDatenschutz(false);
              setShowImpressum(false);
            }}
          >
            Startseite
          </span>
          <br />
        </>
      )}
      <Row>
        <Col xs={{ order: "last", span: 12 }} lg={{ order: "first", span: 6 }}>
          {!showImpressum && !showDatenschutz && <Home />}
          {showImpressum && <Impressum />}
          {showDatenschutz && <Datenschutz />}
          <section>
            <p>
              Gesetzliches: <br />
              {!showImpressum && (
                <>
                  <span
                    role="button"
                    className="text-decoration-underline text-primary"
                    onClick={() => {
                      setShowDatenschutz(false);
                      setShowImpressum(true);
                    }}
                  >
                    Impressum
                  </span>
                  <br />
                </>
              )}
              {!showDatenschutz && (
                <span
                  role="button"
                  className="text-decoration-underline text-primary"
                  onClick={() => {
                    setShowDatenschutz(true);
                    setShowImpressum(false);
                  }}
                >
                  Datenschutz
                </span>
              )}
            </p>
          </section>
        </Col>
        <Col xs={{ order: "first", span: 12 }} lg={{ order: "first", span: 6 }}>
          <Image fluid rounded src="" alt="Zum Thema passendes Bild." />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
