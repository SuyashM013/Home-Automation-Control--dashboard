import React from 'react';

import Temperature from './components/cards/Temperature';
import Lighting from './components/cards/Lighting';
import Devices from './components/cards/Devices';

const Dashboard = () => {
 
  
  return (
    <div className="p-6 bg-slate-200 min-h-screen max-w-6xl m-auto ">

      <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 text-gray-800"> Home Automation Control Dashboard </h1>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Temperature Control */}
        <Temperature />
        
         
         <div className='grid md:grid-cols-2 gap-6'>

        {/* Lighting Control */}
        <Lighting />
      

        {/* Devices Control */}
        <Devices />

         </div>
       
      </div>
    </div>
  );
};

export default Dashboard;