import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Project 1</h3>
          <p>Reprehenderit consectetur voluptate duis dolor ipsum et ea occaecat duis ut. Dolore esse veniam ea ex id anim enim velit labore. Aliqua irure excepteur dolore aliquip. Esse mollit laboris mollit proident mollit in cupidatat duis consequat. Nulla eiusmod aute consequat ipsum adipisicing anim aliquip cillum quis in esse occaecat sint. Labore ullamco ut velit elit tempor commodo ullamco dolore proident amet enim ullamco fugiat. Duis reprehenderit eu cupidatat esse deserunt.</p>
        </div>

        <div className={styles.card}>
          <h3>Project 2</h3>
          <p>Voluptate ullamco consequat enim irure est proident cillum occaecat esse dolore dolor. Esse velit eu Lorem dolor aliquip magna. Deserunt duis sit eiusmod et aliquip dolore in Lorem irure laborum. Voluptate in in proident ipsum anim deserunt officia magna est.</p>
        </div>
        <div className={styles.card}>
          <h3>Project 2</h3>
          <p>Voluptate ullamco consequat enim irure est proident cillum occaecat esse dolore dolor. Esse velit eu Lorem dolor aliquip magna. Deserunt duis sit eiusmod et aliquip dolore in Lorem irure laborum. Voluptate in in proident ipsum anim deserunt officia magna est.</p>
        </div>
        <div className={styles.card}>
          <h3>Project 4</h3>
          <p>Voluptate ullamco consequat enim irure est proident cillum occaecat esse dolore dolor. Esse velit eu Lorem dolor aliquip magna. Deserunt duis sit eiusmod et aliquip dolore in Lorem irure laborum. Voluptate in in proident ipsum anim deserunt officia magna est.</p>
        </div>
      </div>


    </div>
  );
}

export default Projects;