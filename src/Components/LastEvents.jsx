import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "./LastEvents.module.css";
import pic1 from "./LastEvent1.jpeg";

import "./Global.css";

export default LastEvents;

function LastEvents() {
  return (
    <div>
      <Carousel className={styles.carrossel}>
        <Carousel.Item>
          <img src={pic1} alt="" className={styles.pics} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pic1} alt="" className={styles.pics} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pic1} alt="" className={styles.pics} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pic1} alt="" className={styles.pics} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pic1} alt="" className={styles.pics} />
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <img src={pic1} alt="" className={styles.pics} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function LastEvents2() {
  return (
    <div>
      <p>Teste</p>
    </div>
  );
}
