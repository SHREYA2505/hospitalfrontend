import React from "react"
import "./assets/doctor.css"
import {MdClose} from "react-icons/md"

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) =>{
    return (
        <div className="addcontainer">
          
               <form onSubmit={handleSubmit}>
               <div className="close-btn" onClick={handleclose}><MdClose/></div>
                 <label htmlFor="name">Name : </label>
                 <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
  
                 <label htmlFor="email">Email : </label>
                 <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email}/>
  
                 <label htmlFor="mobile">Mobile : </label>
                 <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/>
  
                 <label htmlFor="speciality">Speciality : </label>
                 <input type="text" id="speciality" name="speciality" onChange={handleOnChange} value={rest.speciality}/>
  
                 <label htmlFor="shiftstart">Shift Start : </label>
                 <input type="text" id="shiftstart" name="shiftstart" onChange={handleOnChange} value={rest.shiftstart}/>
  
                 <label htmlFor="shiftend">Shift End : </label>
                 <input type="text" id="shiftend" name="shiftend" onChange={handleOnChange} value={rest.shiftend}/>

                 <label htmlFor="slot">Slot: </label>
                 <input type="text" id="slot" name="slot" onChange={handleOnChange} value={rest.slot}/>
                 
                 <label htmlFor="count">Count: </label>
                 <input type="number" id="count" name="count" onChange={handleOnChange} value={rest.count}/>

  
                 <button className="btn">Submit</button>
  
                </form>
        </div>

    )
}

export default Formtable