import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.contactsList}>
      <div className={styles.contactListContainer}>
        <p className={styles.contactParagraph}>
          <FaUser />
          {name}
        </p>
        <p className={styles.contactParagraph}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
