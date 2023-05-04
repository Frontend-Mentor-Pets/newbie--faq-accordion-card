import { FC } from 'react';
import styles from './Question.module.scss';
import arrow from '../../assets/images/icon-arrow-down.svg';

type QuestionProps = {
  id: string;
  question: string;
  answer: string;
};

const Question: FC<QuestionProps> = ({ id, question, answer }) => {
  return (
    <li className={styles.wrapper}>
      <input type='radio' name='arrow' id={id} defaultChecked={id === '1'} />
      <label htmlFor={id} className={styles.label}>
        <p className={styles.question}>{question}</p>
        <img className={styles.arrow} src={arrow} alt='arrow' />
      </label>
      <p className={styles.answer}>{answer}</p>
    </li>
  );
};

export default Question;
