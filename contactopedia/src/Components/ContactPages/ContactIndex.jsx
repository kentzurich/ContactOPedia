import { useState } from "react";

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Kent Zurich",
      email: "kent.zurich@example.com",
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
          <div className="col-12">FAVORITES CONTACT</div>
        </div>

        <div className="py-2">
          <div className="col-12">GENERAL CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;
