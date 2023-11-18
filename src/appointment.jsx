// ApppointmentList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apptable from './apptable';
axios.defaults.baseURL = 'https://hos-backend.onrender.com/';

function ApppointmentList() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    place: '',
    reason: '',
    doctor: '',
    slot: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    place: '',
    reason: '',
    doctor: '',
    slot: '',
    _id: '',
  });

  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Add this line
    const data = await axios.post('/appointments/create', formData);
    console.log("Response:", data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        place: '',
        reason: '',
        doctor: '',
        slot: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/appointments/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/appointments/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/appointments/update', formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className='white-background-container' style={{ width: '75%' }}>
      <button className='btn btn-add' onClick={() => setAddSection(true)}>
        Add
      </button>
      <br />
      {addSection && (
        <Apptable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose={() => setAddSection(false)}
          rest={formData}
        />
      )}
      {editSection && (
        <Apptable
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleclose={() => setEditSection(false)}
          rest={formDataEdit}
        />
      )}
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Place</th>
              <th>Reason</th>
              <th>Doctor</th>
              <th>Slot</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((el, index) => (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.mobile}</td>
                  <td>{el.gender}</td>
                  <td>{el.place}</td>
                  <td>{el.reason}</td>
                  <td>{el.doctor}</td>
                  <td>{el.slot}</td>
                  <td>
                    <button className='btn btn-edit' onClick={() => handleEdit(el)}>
                      Edit
                    </button>
                    <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='6' style={{ textAlign: 'center' }}>
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApppointmentList;
