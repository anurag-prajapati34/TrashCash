import React, { useContext, useEffect, useState } from 'react';

import {FirebaseAuthContext} from '../contexts/FirebaseAuthContext'

const AllUserReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {logedInUser}=useContext(FirebaseAuthContext)

  // Replace this with real user ID/token-based logic




 // Ideally fetch from auth context or localStorage

  useEffect(() => {
    const fetchReports = async () => {
      const userId = logedInUser.uid;
      console.log("loged in")
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/trash/reports/all?uid=${userId}`);
        const resData=await res.json();
        console.log("resData",resData)
         setReports(resData.reports);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load reports.');
        setLoading(false);
      }
    };

    fetchReports();
  },[logedInUser] );

  if (loading) return <div className="p-4">Loading reports...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl mt-5 text-start font-bold  mb-4">Your Trash Reports</h2>
      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report) => (
            <div key={report._id} className="border rounded-xl p-4 shadow">
              <img src={report.imageUrl} alt="Trash" className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold">{report.address}</h3>
              <p className="text-gray-700">{report.description}</p>
              <p className="text-sm text-gray-500 mt-1">{report.city}, {report.state} - {report.zip}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUserReports;
