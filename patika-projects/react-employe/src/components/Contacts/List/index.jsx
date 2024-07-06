import { useState } from "react";

function List({ contacts }) {
  const [searchValue, setSearchValue] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <input
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul className="list">
        {filtered.map((c, i) => (
          <li key={i}>
            <span> Name : {c.fullName}</span>
            <span> Phone Number : {c.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </>
  );
}

export default List;
