import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./userpage.scss";

export type CompanyType = {
  name: string;
};
export type user = {
  name: string;
  id: number;
  email: string;
  company: CompanyType;
};

export type UsersType = {
  users: user[];
  isLoading: boolean;
  error: any;
};
export const UserPage = ({ users, isLoading, error }: UsersType) => {
  console.log(users);

  let content;
  if (isLoading) {
    content = (
      <div className="profile">
        <Skeleton count={3} className="userdata-skeleton" />
      </div>
    );
  } else if (error) {
    <p>{error.message}</p>;
  } else if (users) {
    const { id } = useParams();
    const userData = users.find((user) => String(user.id) === id);
    content = (
      <div className="profile">
        <h3>Company Name: {userData?.company.name}</h3>
        <p>{userData?.name}</p>
        <p>{userData?.email}</p>
      </div>
    );
  }
  return (
    <div className="userdata">
      <NavLink to="/" className="link">
        Back
      </NavLink>
      {content}
    </div>
  );
};
