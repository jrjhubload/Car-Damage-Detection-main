import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const FnolDetail = () => {
  const location = useLocation();
  // Get the fnol data from Home.jsx
  const { FNOL_ID, Date, SrNo } = location.state || { FNOL_ID: 'N/A', Date: 'N/A', SrNo: 'N/A' }; 


  const fnolData = {
    srNo: SrNo, 
    date: Date, 
    fnolId: FNOL_ID, // From URL parameter
    locationDetails: 'Example location details here', // Example data
    fnolDetails: 'Example FNOL details here', //Example data
    photoCount: 4, // Example: 4 photos available (FV, BV, RV, LV)
    // If photoCount is 1, only the "whole" image would be displayed
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 ">#FNOL{fnolData.fnolId} Details</h1>
       
      <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <label className="w-32 text-gray-700 font-medium">Sr.No:</label>
            <span className="text-gray-900">{fnolData.srNo}</span>
          </div>
          <div className="flex items-center">
            <label className="w-32 text-gray-700 font-medium">Date:</label>
            <span className="text-gray-900">{fnolData.date}</span>
          </div>
          
          <div className="flex items-start mt-4"> 
            <label className="w-32 text-gray-700 font-medium pt-3">FNOL:</label> 
            <textarea
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="7"
                defaultValue={fnolData.fnolDetails}
              ></textarea>
          </div>

          <div className="flex items-center mt-4"> 
            <label className="w-32 text-gray-700 font-medium">Location:</label> 
           <input
              type="text" 
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={fnolData.locationDetails}
            />
          </div>
        </div>

        {/* Right Section - Image Display */}
        <div>
          {fnolData.photoCount > 1 ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-600 rounded-md">FV</div>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-600 rounded-md">BV</div>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-600 rounded-md">RV</div>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-600 rounded-md">LV</div>
            </div>
          ) : (
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-600 rounded-md">
              Whole Photo (Only 1 Photo Display)
            </div>
          )}
        </div>
      </div>

      {/* Save and Update Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Save
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Update
        </button>
      </div>
    </div>
  );
};

export default FnolDetail;