import styles from "../project/project.module.css";
import { projectData } from "../../utils/data";
import Learn from "../../events/Learn";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.top}>
        <hr className={styles.line} />
        <div className={styles.topSecond}>
          <span>Projects We Have Done</span>
          <h1>
            We are creating a place where children with special needs can thrive
          </h1>
        </div>
      </div>
      <div className={styles.servicesListContainer}>
        <ul className={styles.lists}>
          {projectData.map((project) => (
            <li key={project.id} className={styles.projectItem}>
              <img className={styles.img} src={project.img} alt={project.pix} />
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Learn />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
