import React, { useState, useEffect } from "react";

const ActiveUsers = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <h2>Active users: {users.length}</h2>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <article key={id} className="single-item">
            <h2 className="title">{name}</h2>
            <button onClick={() => removeUser(id)} className="remove-btn">
              remove user
            </button>
          </article>
        );
      })}
      {users.length ? (
        <button onClick={() => setUsers([])} className="clear-btn">
          Clear All
        </button>
      ) : (
        <button onClick={() => fetchData()} className="clear-btn">
          Reload Users
        </button>
      )}
    </>
  );
};

export default ActiveUsers;
