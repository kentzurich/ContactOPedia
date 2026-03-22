import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Kent Zurich",
      email: "kent.zurich@example.com",
      phone: "555-555-5555",
      isFavorite: false,
    },
  ]);

  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">ADD CONTACT</div>
          <div className="col-6">REMOVE CONTACT</div>
        </div>

        <div className="py-2">
          <div className="col-12">FORM TO ADD NEW CONTACT</div>
        </div>

        <div className="py-2">
          <FavoriteContacts
            contacts={contactList.filter(
              (contact) => contact.isFavorite == false,
            )}
          />
        </div>

        <div className="py-2">
          <div className="col-12">GENERAL CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;
