import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Datenschutz from "./Datenschutz";
import useTheme from "./Hooks/useTheme";
import Impressum from "./Impressum";
// import ThemeToggle from "./ThemeToggle";

function App() {
  useTheme();

  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const handleCloseImpressum = () => setShowImpressum(false);
  const handleCloseDatenschutz = () => setShowDatenschutz(false);
  const handleShowImpressum = () => setShowImpressum(true);
  const handleShowDatenschutz = () => setShowDatenschutz(true);

  // const toggleMode = () => {
  //   setManual(true);
  //   setDark((prev) => !prev);
  // };

  return (
    <>
      {/* <ThemeToggle onClick={toggleMode} /> */}
      <Container fluid={"sm"} className="custom-container">
        <h2 className="text-center">Hier entsteht die Webseite von</h2>
        <h1 className="text-center">Green Building Solutions GmbH</h1>
        <Row className="gx-5 mt-5">
          <Col sm={6} className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="btn-lg "
              onClick={handleShowImpressum}
            >
              Impressum
            </Button>
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="btn-lg "
              onClick={handleShowDatenschutz}
            >
              Datenschutz
            </Button>
          </Col>
        </Row>
      </Container>
      {/* Impressum */}
      <Impressum
        handleCloseImpressum={handleCloseImpressum}
        showImpressum={showImpressum}
      />
      {/* Datenschutz */}
      <Datenschutz
        handleCloseDatenschutz={handleCloseDatenschutz}
        showDatenschutz={showDatenschutz}
      />
    </>
  );
}

export default App;
