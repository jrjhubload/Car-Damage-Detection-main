import React, { useState, useEffect } from 'react';

const FnolUpload = () => {
  const [srNo, setSrNo] = useState('');
  const [date, setDate] = useState('');
  const [fnol, setFnol] = useState('');
  const [uploadFnolFile, setUploadFnolFile] = useState(null);
  const [uploadFnolFileName, setUploadFnolFileName] = useState('');
  const [locationDetails, setLocationDetails] = useState('');

  const [fvUpload, setFvUpload] = useState(null);
  const [fvUrl, setFvUrl] = useState(null);

  const [bvUpload, setBvUpload] = useState(null);
  const [bvUrl, setBvUrl] = useState(null);

  const [rvUpload, setRvUpload] = useState(null);
  const [rvUrl, setRvUrl] = useState(null);

  const [lvUpload, setLvUpload] = useState(null);
  const [lvUrl, setLvUrl] = useState(null);

  const [severityLevel, setSeverityLevel] = useState('');
  const [detectedParts, setDetectedParts] = useState('');

  const handleFnolFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFnolFile(file);
      setUploadFnolFileName(file.name);
    }
  };

  const handleImageUpload = (e, setFile, setFileUrl) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFile(file);
      setFileUrl(fileUrl);
    }
  };

  // Effect hooks to revoke object URLs when component unmounts or image changes
  useEffect(() => {
    return () => {
      if (fvUrl) URL.revokeObjectURL(fvUrl);
    };
  }, [fvUrl]);

  useEffect(() => {
    return () => {
      if (bvUrl) URL.revokeObjectURL(bvUrl);
    };
  }, [bvUrl]);

  useEffect(() => {
    return () => {
      if (rvUrl) URL.revokeObjectURL(rvUrl);
    };
  }, [rvUrl]);

  useEffect(() => {
    return () => {
      if (lvUrl) URL.revokeObjectURL(lvUrl);
    };
  }, [lvUrl]);

  const handleEvaluate = () => {
    console.log('Evaluate button clicked');
    setSeverityLevel('Minor');
  };

  const handleDetect = () => {
    console.log('Detect button clicked');
    setDetectedParts('Front Bumper, Left Headlight');
  };

  const handleSave = () => {
    console.log('Save button clicked');
    const formData = {
      srNo,
      date,
      fnol,
      uploadFnolFileName,
      locationDetails,
      fvUpload: fvUpload ? fvUpload.name : '',
      bvUpload: bvUpload ? bvUpload.name : '',
      rvUpload: rvUpload ? rvUpload.name : '',
      lvUpload: lvUpload ? lvUpload.name : '',
      severityLevel,
      detectedParts,
    };
    console.log('Saving FNOL data:', formData);
    console.log('FNOL data saved! (This is a mock message)');
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Damage Detection</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: FNOL Details and Upload */}
          <div className="space-y-6">
            {/* Sr.No */}
            <div className="flex items-center"> {/* Added flex container */}
              <label htmlFor="srNo" className="w-32 text-gray-700 font-medium"> {/* Fixed width for label */}
                Sr.No:
              </label>
              <input
                type="text"
                id="srNo"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                value={srNo}
                onChange={(e) => setSrNo(e.target.value)}
              />
            </div>

            {/* Date */}
            <div className="flex items-center"> {/* Added flex container */}
              <label htmlFor="date" className="w-32 text-gray-700 font-medium"> {/* Fixed width for label */}
                Date:
              </label>
              <input
                type="date"
                id="date"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* FNOL */}
            <div className="flex items-start"> {/* Use items-start for textarea to align with top */}
              <label htmlFor="fnol" className="w-32 text-gray-700 font-medium pt-2"> {/* Fixed width for label, added pt-2 for slight top padding */}
                FNOL:
              </label>
              <textarea
                id="fnol"
                rows="5"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
                value={fnol}
                onChange={(e) => setFnol(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center mt-6">
              <label htmlFor="uploadFnol" className="w-32 block font-medium text-gray-700">
                Upload FNOL
              </label>
              <div className="flex items-center space-x-3">
                <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm">
                  <span>Browse</span>
                  <input
                    id="uploadFnol"
                    type="file"
                    className="hidden"
                    onChange={handleFnolFileUpload}
                  />
                </label>
                <span className="text-gray-500 truncate">
                  {uploadFnolFileName || ''}
                </span>
              </div>
            </div>

            {/* Location Details */}
            <div className="flex items-center"> {/* Added flex container */}
              <label htmlFor="locationDetails" className="w-32 text-gray-700 font-medium"> {/* Fixed width for label */}
                Location:
              </label>
              <input
                type="text"
                id="locationDetails"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                value={locationDetails}
                onChange={(e) => setLocationDetails(e.target.value)}
              />
            </div>
          </div>

          {/* Right Section: Image Uploads and Detection */}
          <div className="flex flex-col space-y-6">
            {/* Image Upload Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'FV Upload', file: fvUpload, setFile: setFvUpload, url: fvUrl, setUrl: setFvUrl },
                { label: 'BV Upload', file: bvUpload, setFile: setBvUpload, url: bvUrl, setUrl: setBvUrl },
                { label: 'RV Upload', file: rvUpload, setFile: setRvUpload, url: rvUrl, setUrl: setRvUrl },
                { label: 'LV Upload', file: lvUpload, setFile: setLvUpload, url: lvUrl, setUrl: setLvUrl },
              ].map(({ label, file, setFile, url, setUrl }) => (
                <div key={label} className="border border-gray-300 rounded-md flex flex-col items-center justify-center p-4 h-36 relative overflow-hidden">
                  <label htmlFor={`upload-${label.toLowerCase().replace(' ', '-')}`} className="cursor-pointer flex flex-col items-center justify-center w-full h-full text-blue-600 hover:text-blue-700 font-medium">
                    {file && url ? (
                      <>
                        <img src={url} alt={label} className="max-w-full max-h-full object-contain rounded-md" />
                        <span className="text-xs text-gray-500 mt-1 truncate w-full text-center">{file.name}</span>
                      </>
                    ) : (
                      <span>{label}</span>
                    )}
                    <input
                      id={`upload-${label.toLowerCase().replace(' ', '-')}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, setFile, setUrl)}
                      accept="image/*"
                    />
                  </label>
                </div>
              ))}
            </div>

            {/* Evaluate and Severity */}
            <div className="border border-dashed border-gray-400 p-6 rounded-md flex items-center space-x-4">
              <button
                onClick={handleEvaluate}
                className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Evaluate
              </button>
              <div className="w-1/2 bg-gray-100 text-gray-800 text-center py-3 px-6 rounded-md border border-gray-300">
                <span className="font-semibold">Severity Level: </span>
                {severityLevel || 'N/A'}
              </div>
            </div>

            {/* Detect and Detected Parts */}
            <div className="border border-dashed border-gray-400 p-6 rounded-md flex items-center space-x-4">
              <button
                onClick={handleDetect}
                className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Detect
              </button>
              <div className="w-1/2 bg-gray-100 text-gray-800 text-center py-3 px-6 rounded-md border border-gray-300">
                <span className="font-semibold">Detected Parts: </span>
                {detectedParts || 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FnolUpload;