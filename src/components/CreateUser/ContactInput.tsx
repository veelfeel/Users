import { useState } from "react";

interface ContactInputProps {
  setContactList: React.Dispatch<React.SetStateAction<string[]>>;
  contactList: string[];
}

export const FormContactList: React.FC<ContactInputProps> = ({
  setContactList,
  contactList,
}) => {
  const [inputContactName, setInputContactName] = useState<string>("");

  const onClickPushContact = () => {
    setContactList([...contactList, inputContactName]);
    setInputContactName("");
  };

  const onClickRemoveContact = (index: number) => {
    const contactAfterDeleting = contactList.filter((_, idx) => idx !== index);
    setContactList(contactAfterDeleting);
  };

  return (
    <>
      <label htmlFor="contactList">Добавить контакты</label>
      <div className="form__contact-list">
        <input
          onChange={(e) => setInputContactName(e.target.value)}
          value={inputContactName}
          id="contactList"
          type="text"
        />
        {inputContactName !== "" && (
          <div
            onClick={onClickPushContact}
            className="form__contact-add-button"
          >
            <span>Добавить</span>
          </div>
        )}
      </div>
      <ul className="form__contact-list-two">
        {contactList.map((contact, index) => (
          <li key={index} className="form__contact-list-item">
            <div className="form__contact-name">{contact}</div>
            <div
              onClick={() => onClickRemoveContact(index)}
              className="modal__close"
            >
              <span></span>
              <span></span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
