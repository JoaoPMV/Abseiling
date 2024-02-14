import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./NextEvents.module.css";

function NextEvents({ foto, local, descricao, nivel, altura, data }) {
  return (
    <>
      <Card className={styles.box}>
        <Card.Img variant="top" src={foto} />
        <Card.Body>
          <Card.Title className={styles.onde}>{local}</Card.Title>
          <Card.Text>{descricao}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Nível: {nivel}</ListGroup.Item>
          <ListGroup.Item>Altura: {altura}</ListGroup.Item>
          <ListGroup.Item>Data: {data}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default NextEvents;
