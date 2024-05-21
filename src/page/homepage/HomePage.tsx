import { Navbar } from "../../components/navbar/Navbar";
import { User } from "../../components/user/User";
import { user } from "../userPage/UserPage";

type PropsType = {
  users: user[];
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
