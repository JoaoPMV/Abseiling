export default TeamLap;
import styles from "./TeamLap.module.css";
import { Container, Row, Col } from "react-bootstrap";

function TeamLap({ biografia, foto, nome }) {
  return (
    <div>
      <Container fluid className=" d-flex justify-content-center">
        <div className={styles.caixa}>
          <img src={foto} alt="Foto" className={styles.caixaFoto} />
          <div className={styles.bio}>
            <p className={styles.namebio}>{nome}</p>
            <p className={styles.biography}>{biografia}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
