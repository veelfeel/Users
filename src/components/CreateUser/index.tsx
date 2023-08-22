import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FormContactList } from "./ContactInput";
import { useUsers } from "../../hooks/useUsers";
import { createUser } from "../../context/actions/createUser";

export const CreateUser: React.FC = () => {
  const [formIsShow, setFormIsShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [contactList, setContactList] = useState<string[]>([]);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const { dispatch } = useUsers();

  const onSubmitAddNewUser = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setFormIsShow(false);

    const newUser = {
      name,
      photoUrl,
      age: parseInt(age),
      city,
      contactList,
    };

    await createUser(newUser, dispatch);

    setName("");
    setPhotoUrl("");
    setAge("");
    setCity("");
    setContactList([]);
  };

  useEffect(() => {
    if (name !== "" && photoUrl !== "" && age !== "" && city !== "") {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [name, photoUrl, age, city]);

  return (
    <>
      <button onClick={() => setFormIsShow(true)}>
        + Добавить пользователя
      </button>
      {formIsShow &&
        createPortal(
          <div className="form__overlay">
            <div className="modal__close" onClick={() => setFormIsShow(false)}>
              <span></span>
              <span></span>
            </div>
            <form onSubmit={onSubmitAddNewUser} className="form__popup">
              <p className="form__popup-title">Добавить пользователя</p>
              <label htmlFor="name">Имя</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                type="text"
              />
              <label htmlFor="photoUrl">Ссылка на фотографию</label>
              <input
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
                id="photoUrl"
                type="text"
                placeholder="https://example.com"
              />
              <label htmlFor="age">Возраст</label>
              <input
                onChange={(e) => setAge(e.target.value.replace(/\D/g, ""))}
                value={age}
                id="age"
                type="text"
              />
              <label htmlFor="city">Город проживания</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                id="city"
                type="text"
              />
              <FormContactList
                setContactList={setContactList}
                contactList={contactList}
              />
              <button disabled={!formIsValid} type="submit">
                Сохранить
              </button>
            </form>
          </div>,
          document.getElementById("portal")!
        )}
    </>
  );
};
