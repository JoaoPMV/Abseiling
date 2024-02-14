import Card from "react-bootstrap/Card";
import styles from "./Team.module.css";

function Team({ nome, descricao, foto }) {
  return (
    <Card className={styles.box}>
      <Card.Img variant="top" src={foto} className="" />
      <Card.Body className={styles.corpo}>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>{descricao}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Team;
