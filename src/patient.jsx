// ApppointmentList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pattable from './pattable';
axios.defaults.baseURL = 'https://hos-backend.onrender.com/';

function PatientList() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    gender: '',
    address: '',
    reason:'',
    admitdate: '',
    token: '',
    room: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    mobile: '',
    gender: '',
    address: '',
    reason: '',
    admitdate: '',
    admittime: '',
    room: '',
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
    const data = await axios.post('/patients/create', formData);
    console.log("Response:", data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: '',
        mobile: '',
        gender: '',
        address: '',
        reason: '',
        admitdate: '',
        admittime: '',
        room: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/patients/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/patients/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/patients/update', formDataEdit);
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
        <Pattable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose={() => setAddSection(false)}
          rest={formData}
        />
      )}
      {editSection && (
        <Pattable
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
              <th>Mobile</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Reason</th>
              <th>Admit Date</th>
              <th>Admit Time</th>
              <th>Room Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((el, index) => (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.mobile}</td>
                  <td>{el.gender}</td>
                  <td>{el.address}</td>
                  <td>{el.reason}</td>
                  <td>{el.admitdate}</td>
                  <td>{el.admittime}</td>
                  <td>{el.room}</td>
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

export default PatientList;
