import React from "react";
import "./assets/doctor.css";
import { MdClose } from "react-icons/md";

const Equiptable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />

        <label htmlFor="manufacturedate">Purchased Date: </label>
        <input type="text" id="manufacturedate" name="manufacturedate" onChange={handleOnChange} value={rest.manufacturedate} />

        <label htmlFor="warranty">Warranty : </label>
        <input type="text" id="warranty" name="warranty" onChange={handleOnChange} value={rest.warranty} />

        <label htmlFor="cost">Cost : </label>
        <input type="number" id="cost" name="cost" onChange={handleOnChange} value={rest.cost} />

        <label htmlFor="seller">Seller : </label>
        <input type="text" id="seller" name="seller" onChange={handleOnChange} value={rest.seller} />

        


        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Equiptable;

