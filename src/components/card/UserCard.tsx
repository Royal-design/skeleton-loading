import avatar from "../../assets/image/avataraa.png";
import "./usercard.scss";

import { useNavigate } from "react-router-dom";

export const UserCard = ({ user }: any) => {
  const navigate = useNavigate();
  const content = (
    <div
      className="card"
      onClick={() => navigate(`skeleton-loading/users/${user.id}`)}
    >
      <div className="card-content">
        <div className="card-left">
          <figure className="card-figure ">
            <img className="card-img" src={avatar} alt="avatar" />
          </figure>
        </div>
        <div className="card-right">
          <h2 className="card-name">{user.name}</h2>
          <p className="card-username">Username: {user.username}</p>
          <p className="card-email">Email: {user.email}</p>
          <p className="card-phone">Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
  return content;
};
