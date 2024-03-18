import css from "./FriendListItem.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const styleOnline = clsx(css.online, isOnline ? css.isOnline : css.isOffline);
  return (
    <div>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={styleOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
