import React, { useState } from 'react';

function InputBox({ type, name, value, onChange, placeholder }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2 bg-background border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        placeholder={placeholder}
      />
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-20">
        <h1 className="font-bold text-3xl mb-6 text-center" style={{ color: "#1e293b" }}>
          Contact Me
        </h1>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium" style={{ color: "#475569" }}>First Name</label>
            <InputBox
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: "#475569" }}>Last Name</label>
            <InputBox
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: "#475569" }}>Email</label>
            <InputBox
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: "#475569" }}>Subject</label>
            <InputBox
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject..."
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: "#475569" }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 h-24 bg-background border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 font-bold rounded-md transition-colors"
            style={{ backgroundColor: "#d9466c", color: "#ffffff" }}
            onMouseEnter={e => e.target.style.backgroundColor = "#b73354"}
            onMouseLeave={e => e.target.style.backgroundColor = "#d9466c"}
          >
            Send
          </button>
        </form>

        {submitted && (
          <p
            className="mt-4 text-center font-medium"
            style={{ color: "#16a34a" }} // green success message
          >
            Thanks for filling out the form! We'll be in touch.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
