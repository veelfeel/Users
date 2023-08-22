import { createPortal } from "react-dom";
import { IUser } from "../@types/user";

interface ShowProfileProps extends IUser {
  modalIsShow: boolean;
  setModalIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowProfile: React.FC<ShowProfileProps> = ({
  modalIsShow,
  setModalIsShow,
  name,
  photoUrl,
  age,
  city,
  contactList,
}) => {
  if (!modalIsShow) return null;

  return createPortal(
    <div className="modal__overlay">
      <div className="modal__close" onClick={() => setModalIsShow(false)}>
        <span></span>
        <span></span>
      </div>
      <div className="modal__popup">
        <img width="260" height="260" src={photoUrl} alt={name} />
        <div className="modal__name">{name}</div>
        <div className="modal__info">
          <p>Возраст:</p>
          <p>{age}</p>
          <p>Город:</p>
          <p>{city}</p>
          <p>Контакты:</p>
          <ul>
            {contactList.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};
