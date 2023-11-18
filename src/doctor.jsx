import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formtable from './formtable';

axios.defaults.baseURL = 'https://hos-backend.onrender.com/';

function DoctorList() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    speciality: '',
    shiftstart: '',
    shiftend: '',
    slot: '',
    count: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    email: '',
    mobile: '',
    speciality: '',
    shiftstart: '',
    shiftend: '',
    slot: '',
    count: '',
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
    const data = await axios.post('/doctors/create', formData);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: '',
        email: '',
        mobile: '',
        speciality: '',
        shiftstart: '',
        shiftend: '',
        slot: '',
        count: '',
      });
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get('/doctors/');
      console.log('Data from server:', response.data);

      if (response.data.status === 'success') {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/doctors/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/doctors/update', formDataEdit);
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
        <Formtable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose={() => setAddSection(false)}
          rest={formData}
        />
      )}
      {editSection && (
        <Formtable
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
              <th>Speciality</th>
              <th>Shift Start</th>
              <th>Shift End</th>
              <th>Slot</th>
              <th>Count</th>
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
                  <td>{el.speciality}</td>
                  <td>{el.shiftstart}</td>
                  <td>{el.shiftend}</td>
                  <td>{el.slot}</td>
                  <td>{el.count}</td>
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

export default DoctorList;
