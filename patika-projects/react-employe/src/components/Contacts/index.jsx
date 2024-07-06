import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import "./styles.css";

function Contact() {
  const [contacts, setContats] = useState([
    { fullName: "NakreS", phone_number: 4583 },
    { fullName: "Dollar", phone_number: 543 },
    { fullName: "atimate", phone_number: 15315 },
    { fullName: "ciguli", phone_number: 1235 },
    { fullName: "members", phone_number: 4568 },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} /> <br />
      <Form contacts={contacts} addContact={setContats} />
    </div>
  );
}

export default Contact;
