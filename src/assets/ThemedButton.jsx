import React from 'react';

const ThemedButton = ({ label, onClick }) => {
  return (
    <button className="button relative" onClick={onClick}>
      {/* Shadow layer */}
      <span className="shadow absolute inset-0 w-full h-full rounded-lg bg-[rgba(183,51,84,0.25)] transform translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)]"></span>

      {/* Edge layer */}
      <span
        className="edge absolute inset-0 w-full h-full rounded-lg"
        style={{
          background: 'linear-gradient(to left, #b73354 0%, #d9466c 8%, #d9466c 92%, #b73354 100%)'
        }}
      ></span>

      {/* Front layer */}
      <span
        className="front relative flex items-center justify-center px-7 py-3 text-lg font-medium text-white rounded-lg transform -translate-y-1 transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)]"
      >
        {label}
      </span>

      <style jsx>{`
        .button:hover .shadow {
          transform: translateY(4px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }
        .button:hover .front {
          transform: translateY(-6px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }
        .button:active .shadow {
          transform: translateY(1px);
          transition: transform 34ms;
        }
        .button:active .front {
          transform: translateY(-2px);
          transition: transform 34ms;
        }
      `}</style>
    </button>
  );
};

export default ThemedButton;
