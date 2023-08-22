import { User } from "./User";
import { IUser } from "../@types/user";
import { useUsers } from "../hooks/useUsers";

export const UserList = () => {
  const { users } = useUsers();

  return (
    <div className="user__list">
      {users.map((user: IUser) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};
