import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="148" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.friendOn}>Online</p>
      ) : (
        <p className={css.friendOff}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
