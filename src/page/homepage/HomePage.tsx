import { Navbar } from "../../components/navbar/Navbar";
import { User } from "../../components/user/User";

type UserType = object;

type PropsType = {
  users: UserType[];
  isLoading: boolean;
  error: any;
};
export const HomePage = ({ users, isLoading, error }: PropsType) => {
  const content = <User users={users} isLoading={isLoading} error={error} />;
  return (
    <>
      <Navbar />
      {content}
    </>
  );
};
