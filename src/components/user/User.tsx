import { UserCard } from "../card/UserCard";
// import { endpoint } from "../../Api/api";
// import { getUsers } from "../../Api/api";
// import useSWR from "swr";
import { SkeletonUser } from "../skeleton/SkeletonUser";
import "./user.scss";
type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
export const User = ({ users, isLoading, error }) => {
  // const { data: users, isLoading, error } = useSWR(endpoint, getUsers);
  console.log(users);

  const content = (
    <div className="users">
      {isLoading &&
        [...Array(10).keys()].map((i) => {
          return <SkeletonUser key={i} />;
        })}
      {users &&
        users.map((user: UserType) => {
          return <UserCard key={user.id} user={user} />;
        })}
    </div>
  );

  return content;
};
