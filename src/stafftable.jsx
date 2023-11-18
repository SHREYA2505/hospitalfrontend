import React from "react";
import "./assets/doctor.css";
import { MdClose } from "react-icons/md";

const Stafftable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="staffid">Staff id : </label>
        <input type="number" id="staffid" name="staffid" onChange={handleOnChange} value={rest.staffid} />

        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />

        <label htmlFor="mobile">Mobile : </label>
        <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile} />

        <label htmlFor="gender">Gender : </label>
        <input type="text" id="gender" name="gender" onChange={handleOnChange} value={rest.gender} />

        <label htmlFor="age">Age : </label>
        <input type="text" id="age" name="age" onChange={handleOnChange} value={rest.age} />

        <label htmlFor="joiningdate">Joining Date: </label>
        <input type="text" id="joiningdate" name="joiningdate" onChange={handleOnChange} value={rest.joiningdate} />


        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Stafftable;

