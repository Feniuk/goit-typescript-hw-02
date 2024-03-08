import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      {" "}
      <div>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>{" "}
        <p className={css.personalInfo}>@{tag}</p>{" "}
        <p className={css.personalInfo}>{location}</p>{" "}
      </div>{" "}
      <ul className={css.statsList}>
        {" "}
        <li className={css.statsItem}>
          <span className={css.statsName}>Followers</span>{" "}
          <span className={css.statsInfo}>{stats.followers}</span>{" "}
        </li>{" "}
        <li className={css.statsItem}>
          <span className={css.statsName}>Views</span>{" "}
          <span className={css.statsInfo}>{stats.views}</span>{" "}
        </li>{" "}
        <li className={css.statsItem}>
          <span className={css.statsName}>Likes</span>{" "}
          <span className={css.statsInfo}>{stats.likes}</span>{" "}
        </li>{" "}
      </ul>
    </div>
  );
};
export default Profile;
