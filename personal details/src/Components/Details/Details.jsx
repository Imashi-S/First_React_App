import React, { useState } from 'react';
import './Details.css'

const PersonalDetails = () => {
  const [form, setForm] = useState({
    district: '',
    phoneNumber: '',
    whatsappNumber: '',
    birthday: '',
    nicNumber: '',
    address: '',
    educationalLevel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (

    <div className="personal-details">

      <h2>Personal Details 👤 </h2>

      <form>
        <h3>Current District</h3>
        <select name="district" value={form.district} onChange={handleChange}>
          <option value="">Select Your District</option>
          <option value="Ampara">Ampara</option>
          <option value="Anuradhapura">Anuradhapura</option>
          <option value="Badulla">Badulla</option>
          <option value="Batticaloa">Batticaloa</option>
          <option value="Colombo">Colombo</option>
          <option value="Galle">Galle</option>
          <option value="Gampaha">Gampaha</option>
          <option value="Hambantota">Hambantota</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Kalutara">Kalutara</option>
          <option value="Kandy">Kandy</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Kilinochchi">Kilinochchi</option>
          <option value="Kurunegala">Kurunegala</option>
          <option value="Mannar">Mannar</option>
          <option value="Matale">Matale</option>
          <option value="Matara">Matara</option>
          <option value="Moneragala">Moneragala</option>
          <option value="Mullaitivu">Mullaitivu</option>
          <option value="Nuwara Eliya">Nuwara Eliya</option>
          <option value="Polonnaruwa">Polonnaruwa</option>
          <option value="Puttalam">Puttalam</option>
          <option value="Ratnapura">Ratnapura</option>
          <option value="Trincomalee">Trincomalee</option>
          <option value="Vavuniya">Vavuniya</option>

        </select>

        <h3>Phone Number</h3>
        <input 
          type="text"
          name="phoneNumber"
          placeholder="07X XXX XXXX"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        
        <h3>Whatsapp Number</h3>
        <input
          type="text"
          name="whatsappNumber"
          placeholder="07X XXX XXXX"
          value={form.whatsappNumber}
          onChange={handleChange}
        />
        
        <h3>Birthday</h3>
        <input
          type="date"
          name="birthday"
          placeholder="Birthday"
          value={form.birthday}
          onChange={handleChange}
        />

        <h3>NIC Number</h3>
        <input
          type="text"
          name="nicNumber"
          placeholder="XXXXXXXXXXXX"
          value={form.nicNumber}
          onChange={handleChange}
        />
        
        <h3>Address</h3>
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={form.address}
          onChange={handleChange}
        />
        
        <h3>Educational Level</h3>
        <select name="educationalLevel" value={form.educationalLevel} onChange={handleChange} >
          <option value="">Select Your Educational Level</option>
          <option value="O/L">G.C.E O/L</option>
          <option value="A/L">G.C.E A/L</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Postgraduate">Postgraduate</option>
        </select>

        <button>Next → </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
