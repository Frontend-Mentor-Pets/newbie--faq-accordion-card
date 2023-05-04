import styles from './Card.module.scss';
import box from '../../assets/images/illustration-box-desktop.svg';
import woman from '../../assets/images/illustration-woman-online-desktop.svg';
import questions from '../../assets/data';
import Question from '../Question';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img className={styles.woman} src={woman} alt='woman' />
        <img className={styles.box} src={box} alt='box' />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>FAQ</h1>
        <ul className={styles.questions}>
          {questions.map(({ question, answer }, id) => (
            <Question key={id} id={String(id)} question={question} answer={answer} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
