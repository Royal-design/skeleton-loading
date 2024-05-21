import { UserCard } from "../card/UserCard";
import { UsersType } from "../../page/userPage/UserPage";

import { SkeletonUser } from "../skeleton/SkeletonUser";
import "./user.scss";

export const User = ({ users, isLoading, error }: UsersType) => {
  console.log(users);

  const content = (
    <div className="users">
      {isLoading &&
        [...Array(10).keys()].map((i) => {
          return <SkeletonUser key={i} />;
        })}
      {error && <p>{error.message}</p>}
      {users &&
        users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
    </div>
  );

  return content;
};
