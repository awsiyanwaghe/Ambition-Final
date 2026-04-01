import React, { useState } from 'react';

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyeMSCL_RqlDFk10pn6WsqCbI7XIo9px7SiBvnzj-OjW67Xw/viewform";

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleEnroll = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  const faculty = [
    { id: 1, name: "Sagar Sir", subject: "Maths" },
    { id: 2, name: "Simran Ma'am", subject: "Accounts" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Faculty</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {faculty.map(f => (
          <div
            key={f.id}
            className="p-6 bg-white shadow rounded cursor-pointer"
            onClick={() => setSelectedFaculty(f)}
          >
            <h2 className="text-xl font-bold">{f.name}</h2>
            <p>{f.subject}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center" onClick={() => setSelectedFaculty(null)}>
          <div className="bg-white p-6 rounded-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold">{selectedFaculty.name}</h2>

            <button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;