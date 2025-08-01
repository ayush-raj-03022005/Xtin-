import React from 'react';

const ToolCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ToolCard;
