import styles from './TreeCard.module.css'
import { useState } from 'react';

const TreeCard = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.treeName}>{props.treeName}</h1>
      <img src={props.imgSrc} className={styles.image} alt={props.treeName} />
      <p className={styles.location}>{props.location}</p>
      <p>{props.treeName}s bought: {count}</p>
      <button onClick={handleClick}>{count > 0 ? 'Buy Again' : 'Buy Tree'}</button>
      {count >= 5 ? (
        <div>
          <img src='https://vavista.com/wp-content/uploads/2020/03/Tree-Planting--750x400.jpeg' alt="Tree planting" />
          <p>You bought so many trees! Thanks for saving the planet!</p>
          <p>Here's some conditional rendering for your troubles</p>
        </div>
      ) : null}
    </div>
  );
};

export default TreeCard;
