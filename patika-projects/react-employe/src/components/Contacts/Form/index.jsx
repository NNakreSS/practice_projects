import { useEffect } from "react";
import { useState } from "react";

const initialValue = { fullName: "", phone_number: "" };

function Form({ contacts, addContact }) {
  const [form, setForm] = useState(initialValue);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  useEffect(() => {
    setForm(initialValue);
  }, [contacts]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="fullName"
          placeholder="FullName"
          onChange={onChangeInput}
          value={form.fullName}
        />
        <br />
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}
export default Form;
