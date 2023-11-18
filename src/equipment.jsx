// ApppointmentList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Equiptable from './equiptable';
axios.defaults.baseURL = 'https://hos-backend.onrender.com/';

function EquipmentList() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    manufacturedate: '',
    warranty: '',
    cost: '',
    seller: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    manufacturedate: '',
    warranty: '',
    cost: '',
    seller: '',
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
    const data = await axios.post('/equipments/create', formData);
    console.log("Response:", data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: '',
        manufacturedate: '',
        warranty: '',
        cost: '',
        seller: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/equipments/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/equipments/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/equipments/update', formDataEdit);
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
        <Equiptable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose={() => setAddSection(false)}
          rest={formData}
        />
      )}
      {editSection && (
        <Equiptable
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
              <th>Purchased Date</th>
              <th>Warranty</th>
              <th>Cost</th>
              <th>Seller</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((el, index) => (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.manufacturedate}</td>
                  <td>{el.warranty}</td>
                  <td>{el.cost}</td>
                  <td>{el.seller}</td>
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

export default EquipmentList;
