// Apptable.js

import React from "react";
import "./assets/doctor.css";
import { MdClose } from "react-icons/md";

const Apptable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />

        <label htmlFor="email">Email : </label>
        <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email} />

        <label htmlFor="mobile">Mobile : </label>
        <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile} />

        <label htmlFor="gender">Gender : </label>
        <input type="text" id="gender" name="gender" onChange={handleOnChange} value={rest.gender} />

        <label htmlFor="place">Place : </label>
        <input type="text" id="place" name="place" onChange={handleOnChange} value={rest.place} />

        <label htmlFor="reason">Reason: </label>
        <input type="text" id="reason" name="reason" onChange={handleOnChange} value={rest.reason} />

        <label htmlFor="doctor">Doctor : </label>
        <input type="text" id="doctor" name="doctor" onChange={handleOnChange} value={rest.doctor} />

        <label htmlFor="slot">Slot : </label>
        <input type="slot" id="slot" name="slot" onChange={handleOnChange} value={rest.slot} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Apptable;

