import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, success }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-tertiary p-8 rounded-2xl relative z-10 max-w-md w-full mx-4"
      >
        <div className="text-center">
          {success ? (
            <div className="text-green-500 text-6xl mb-4">✓</div>
          ) : (
            <div className="text-red-500 text-6xl mb-4">×</div>
          )}
          <h3 className="text-white text-xl font-bold mb-4">
            {success ? "Message Sent!" : "Oops, an error occured!"}
          </h3>
          <p className="text-secondary mb-6">
            {success 
              ? "Thank you for your message. I will get back to you as soon as possible."
              : "Something went wrong. Please try again."}
          </p>
          <button
            onClick={onClose}
            className="bg-primary py-2 px-6 rounded-xl text-white font-semibold hover:bg-opacity-80"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal; 