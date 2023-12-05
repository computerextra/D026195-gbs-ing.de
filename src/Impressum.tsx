import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

type Modal = {
  showImpressum: boolean;
  handleCloseImpressum: () => void;
};

export default function Impressum({
  showImpressum,
  handleCloseImpressum,
}: Modal) {
  return (
    <Modal
      size="lg"
      show={showImpressum}
      centered
      onHide={handleCloseImpressum}
    >
      <ModalHeader closeButton>
        <ModalTitle>Impressum</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h2>Angaben gemäß §5 TMG</h2>
        <p>
          Green Building Solutions GmbH
          <br />
          Ederweg 4-6
          <br />
          34277 Fuldabrück
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Dipl.-Ing. Marc Klatecki <br />
          Dr.-Ing. Matthias Ernst
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0561 / 3167969 - 0
          <br />
          E-Mail: kontakt [AT] gbs-ing [PUNKT] de
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={handleCloseImpressum}>
          Schließen
        </Button>
      </ModalFooter>
    </Modal>
  );
}
