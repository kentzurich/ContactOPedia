import Contact from "./Contact";

function FavoriteContacts(props) {
  return (
    <div
      className="col-12 p-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Favorites</div>
      {props.contacts.map((contact, index) => (
        <div className="p-2">
          <Contact contact={contact} key={index}></Contact>
        </div>
      ))}
    </div>
  );
}

export default FavoriteContacts;
