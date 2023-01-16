import styles from './Home.module.scss';
import BannerImage from '../../assets/img/lorem-ipsum-img.jpeg';

const Home = () => {
  return (
    <main className={styles.home}>
      <section>
        <h1>Home</h1>
      </section>
      <section className={styles.content}>
        <figcaption className={styles['banner-wrapper']}>
          <img className={styles.image} src={BannerImage} alt='Desktop overview' />
        </figcaption>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim leo, lobortis et ornare sollicitudin, ullamcorper luctus
          ante. Fusce venenatis elit eget arcu ornare cursus. Cras eget turpis turpis. Suspendisse gravida eget ex non rutrum. Donec eu
          ullamcorper lectus. Duis accumsan lorem quis bibendum interdum. Morbi mattis tempus est. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean est metus, scelerisque et eleifend non, iaculis id lorem. Nulla a tellus sed eros elementum maximus vel et
          nibh. Nulla a gravida justo.
        </p>
      </section>
    </main>
  );
};

export { Home };
