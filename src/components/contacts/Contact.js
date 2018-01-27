import React from 'react';

export default ({ name, age, gender, email, phone, city }) => {
  return (
    <li>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>gender: {gender}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>City: {city}</p>
    </li>
  );
};
