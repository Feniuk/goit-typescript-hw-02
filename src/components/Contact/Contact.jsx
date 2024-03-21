import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { FaUserLarge as UserIcon } from "react-icons/fa6";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={styles.contactContainer}>
      <div>
        <p>
          <span className={styles.icon}>
            <PhoneIcon />
          </span>
          {name}
        </p>
        <p>
          <span className={styles.icon}>
            <UserIcon />
          </span>
          {number}
        </p>
      </div>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
