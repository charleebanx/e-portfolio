import React from 'react'
function InputBox({ type, className, placeholder }) {
  return (
    <div>
      <input type={type} className={className} placeholder={placeholder} />
    </div>
  );
}

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-200 w-full flex items-center justify-center">
      <h1 className="font-bold text-3xl m-6">Contact Me</h1>
      <div>
        <label>First Name</label>
        <InputBox type="text" className="field" placeholder="Enter First Name" />
        <label>Last Name</label>
        <InputBox type="text" className="field" placeholder="Enter Last Name" />
        <label>Email</label>
        <InputBox type="text" className="field" placeholder="Enter Email" />
        <label>Subject</label>
        <InputBox type="text" className="field" placeholder="Subject..." />
        <label>Message</label>
        <InputBox type="text" className="field" placeholder="Message..." />
      </div>
    </div>
  )
}

export default Contact