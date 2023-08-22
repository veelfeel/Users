import { useState } from "react";
import { ShowProfile } from "./ShowProfile";
import { IUser } from "../@types/user";

export const User: React.FC<IUser> = (props) => {
  const [modalIsShow, setModalIsShow] = useState<boolean>(false);

  return (
    <div className="user__item">
      <div className="user__name">{props.name}</div>
      <img width="100" height="100" src={props.photoUrl} alt={props.name} />
      <button onClick={() => setModalIsShow(true)}>Показать профиль</button>
      <ShowProfile
        modalIsShow={modalIsShow}
        setModalIsShow={setModalIsShow}
        {...props}
      />
    </div>
  );
};
