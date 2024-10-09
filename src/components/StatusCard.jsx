import React from 'react';

const StatusCard = ({ count, label, color, icon: Icon, className }) => {
  return (
    <div className={`bg-white w-full px-6 py-8 rounded-md border-b-4 ${className}`} style={{ borderColor: color }}>
      <div className='flex justify-between text-4xl font-extrabold mb-5'>
        <p className='text-5xl' style={{ color: color }}>{count}</p>
        <div className='flex justify-center items-center p-2' style={{ backgroundColor: `${color}66`, color: color }}>
          <Icon className='text-3xl' />
        </div>
      </div>
      <p className='text-xl'>{label}</p>
    </div>
  );
};

export default StatusCard;
