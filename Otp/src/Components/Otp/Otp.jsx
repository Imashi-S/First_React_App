import React, { useState } from 'react';
import './Otp.css'

const VerifyEmail = () => {
  const [code, setCode] = useState(Array(6).fill(''));

  const handleChange = (value, index) => {
    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleResend = () => {
    console.log("Code resent!");
    
  };


  return (
    <div className="verify-email">

      <h2>Verify Your Email ✉️ </h2>

      <p>We emailed you the six digit code to personal@email.com. Enter the code 
        below to confirm your email address</p>
      
      <div className="code-inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
          />

        ))
        
        }

      </div>
      
      <p>
        If you didn't receive a code! <span className="resend-link" onClick={handleResend}>RESEND</span>
      </p>

      
     
     <button>
        Verify →
      </button>
    </div>
  );
};

export default VerifyEmail;

