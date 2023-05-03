import styles from './Card.module.scss';
import pattern from '../../assets/images/bg-pattern-desktop.svg';
import box from '../../assets/images/illustration-box-desktop.svg';
import woman from '../../assets/images/illustration-woman-online-desktop.svg';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img className={styles.pattern} src={pattern} alt='pattern' />
        <img className={styles.box} src={box} alt='box' />
        <img className={styles.woman} src={woman} alt='woman' />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>FAQ</h1>

        {/* Question component */}
      </div>
    </div>
  );
};

export default Card;
