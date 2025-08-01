import React from 'react';

const ReturnCard = () => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6">
      <p className="text-sm text-gray-400">Your Monthly Return</p>
      <h2 className="text-4xl font-bold mt-2">$45,234</h2>
      <p className="text-green-400 font-medium mt-1">+152% this month</p>

      {/* Optional: chart or trend line placeholder */}
      <div className="mt-4 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
        📈 Chart Preview
      </div>
    </div>
  );
};

export default ReturnCard;
