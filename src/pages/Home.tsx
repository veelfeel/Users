import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { CreateUser } from "../components/CreateUser";
import { UserList } from "../components/UserList";
import { getUsers } from "../context/actions/getUsers";

const Home: React.FC = () => {
  const { status, users, dispatch } = useUsers();

  useEffect(() => {
    if (users.length === 0) {
      getUsers(dispatch);
    }
  }, [users.length, dispatch]);

  return (
    <>
      <header>
        <CreateUser />
      </header>
      {status === "loading" ? (
        <div className="loading">Загрузка...</div>
      ) : (
        <UserList />
      )}
    </>
  );
};

export default Home;
