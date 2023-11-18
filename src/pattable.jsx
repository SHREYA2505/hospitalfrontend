import React from "react";
import "./assets/doctor.css";
import { MdClose } from "react-icons/md";

const Pattable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />

        <label htmlFor="mobile">Mobile : </label>
        <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile} />

        <label htmlFor="gender">Gender : </label>
        <input type="text" id="gender" name="gender" onChange={handleOnChange} value={rest.gender} />

        <label htmlFor="address">Address : </label>
        <input type="text" id="address" name="address" onChange={handleOnChange} value={rest.address} />

        <label htmlFor="raeson">Reason : </label>
        <input type="text" id="reason" name="reason" onChange={handleOnChange} value={rest.reason} />

        <label htmlFor="admitdate">Admit Date: </label>
        <input type="text" id="admitdate" name="admitdate" onChange={handleOnChange} value={rest.admitdate} />

        <label htmlFor="admittime">Admit Time : </label>
        <input type="text" id="admittime" name="admittime" onChange={handleOnChange} value={rest.admittime} />

        <label htmlFor="room">Room Number : </label>
        <input type="text" id="room" name="room" onChange={handleOnChange} value={rest.room} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Pattable;

