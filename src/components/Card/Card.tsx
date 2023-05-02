import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.name}>Victor Crest</h1>
          <span className={styles.age}>26</span>
        </div>
        <span className={styles.city}>London</span>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <div className={styles.block}>
            <p className={styles.title}>80K</p>
            <p className={styles.subtitle}>Followers</p>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>803K</p>
            <p className={styles.subtitle}>Likes</p>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>1.4K</p>
            <p className={styles.subtitle}>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
