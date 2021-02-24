import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setPersons([...persons, { name, email, id: new Date().getTime() }]);
      setName("");
      setEmail("");
    }
  };

  return (
    <>
      <article className="login-from">
        <form>
          <div className="mb-4">
            <label htmlFor="">Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="text-center">
            <input
              onClick={handleSubmit}
              className="btn btn-success btn-lg"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </article>
      <article>
        {persons.map((person) => (
          <Person key={person.id} {...person} />
        ))}
      </article>
    </>
  );
};

const Person = ({ name, email }) => {
  console.log("and welcome");
  return (
    <div className="single-item">
      <h2>{name}</h2>
      <p className="mb-0">{email}</p>
    </div>
  );
};

export default LoginForm;
