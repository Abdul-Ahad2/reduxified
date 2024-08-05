import React from "react";

const TournamentsData = ({ tournaments }) => {
  return (
    <div className="container mx-auto p-4">
      {tournaments.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Date</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Location</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((tournament, index) => (
              <tr key={index} className="border-b text-center">
                <td className="py-2 px-4">{tournament.name}</td>
                <td className="py-2 px-4">{tournament.date}</td>
                <td className="py-2 px-4">{tournament.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-500">
          No tournaments available
        </div>
      )}
    </div>
  );
};

export default TournamentsData;
