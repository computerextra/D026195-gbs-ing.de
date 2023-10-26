import { useState } from "react";
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from "react-bootstrap";
import useTheme from "./Hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

function App() {
  const { setDark, setManual } = useTheme();

  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const handleCloseImpressum = () => setShowImpressum(false);
  const handleCloseDatenschutz = () => setShowDatenschutz(false);
  const handleShowImpressum = () => setShowImpressum(true);
  const handleShowDatenschutz = () => setShowDatenschutz(true);

  const toggleMode = () => {
    setManual(true);
    setDark((prev) => !prev);
  };

  return (
    <>
      <Container fluid={"sm"} className="custom-container">
        <ThemeToggle onClick={toggleMode} />
        <h2 className="text-center">Hier entsteht die Webseite von</h2>
        <h1 className="text-center">GBS - Green Building Solutions GmbH</h1>
        <Row className="gx-5 mt-5">
          <Col sm={6} className="d-flex justify-content-center">
            <Button variant="primary" className="btn-lg " onClick={handleShowImpressum}>
              Impressum
            </Button>
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <Button variant="primary" className="btn-lg " onClick={handleShowDatenschutz}>
              Datenschutz
            </Button>
          </Col>
        </Row>
      </Container>
      {/* Impressum */}
      <Modal size="lg" show={showImpressum} centered onHide={handleCloseImpressum}>
        <ModalHeader closeButton>
          <ModalTitle>Impressum</ModalTitle>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleCloseImpressum}>
            Schließen
          </Button>
        </ModalFooter>
      </Modal>
      {/* Datenschutz */}
      <Modal size="lg" show={showDatenschutz} centered onHide={handleCloseDatenschutz}>
        <ModalHeader closeButton>
          <ModalTitle>Datenschutzerklärung</ModalTitle>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleCloseDatenschutz}>
            Schließen
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
