import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // Navigate to the FNOL detail page
  const handleViewClick = (fnolDetails) => {
    navigate(`/fnol/${fnolDetails.FNOL}`, {
      state: {
        FNOL_ID: fnolDetails.FNOL,
        Date: fnolDetails.Date,
        SrNo: fnolDetails.SrNo,
      },
    }); 
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Top Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Effine Card */}
        <div className="border border-gray-300 rounded-md p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Effin Joe Wilson</h2>
          <p className="text-gray-600">Metlife Vehicle Insurance agent.</p>
        </div>

        {/* Status Card */}
        <div className="border border-gray-300 rounded-md p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Status</h2>
          <p className="text-gray-600">
            Checks: <br />
            Annotation Done. <br />
            Last Login Date: <br />
            Last Login Session.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-md">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">SrNo</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">FNOL</th>
              <th className="px-4 py-2 border">Image Snapshot</th>
              <th className="px-4 py-2 border">Damage</th>
              <th className="px-4 py-2 border">Part Detected</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            {[1, 2, 3].map((row) => (
              <tr key={row} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{row}</td>
                <td className="px-4 py-2 border">2025-06-23</td>
                <td className="px-4 py-2 border">#FNOL{row}</td>
                <td className="px-4 py-2 border text-blue-600 underline cursor-pointer"
                   //Click will go to the FnolDetail page
                    onClick={() =>
                        handleViewClick({
                          FNOL: `${row}`,
                          Date: '2025-06-23',
                          SrNo: row,
                        })} >View</td>
                <td className="px-4 py-2 border">Minor</td>
                <td className="px-4 py-2 border">Front Bumper</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
