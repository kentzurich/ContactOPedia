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

  return <div>Hello</div>;
}

export default ContactIndex;
