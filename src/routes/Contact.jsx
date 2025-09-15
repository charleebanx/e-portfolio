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
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-20">
        <h1 className="font-bold text-3xl mb-6 text-center">Contact Me</h1>
        <form className = "space-y-3">
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <InputBox
              type="text"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter First Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <InputBox
              type="text"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter Last Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <InputBox
              type="email"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Subject</label>
            <InputBox
              type="text"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Subject..."
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <InputBox
              type="text"
              className="w-full border rounded-md px-3 py-2 h-24"
              placeholder="Message..."
            />
          </div>

          <button
            type="submit"
            className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contact