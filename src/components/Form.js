import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, getSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleData(event){
    event.preventDefault();
    if (firstName.length > 1){
       const formData = { firstName:firstName, lastName:lastName };
       const myData = [...submittedData,formData];
       getSubmittedData(myData);
       setFirstName("");
       setLastName("");
       setErrors([]);
      }
       else {
        setErrors(["First name is required!"]);
       }
  }

  const listOfData = submittedData.map((data,index) => {
    return (
    <div key={index}>
      {data.firstName} {data.lastName}
      </div>
      );
      });

  return (
    <div>
      <form onSubmit={handleData}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>My List</h3>
      {listOfData}
    </div>
  );
}

export default Form;
