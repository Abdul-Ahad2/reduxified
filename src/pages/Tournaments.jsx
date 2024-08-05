import TournamentsData from "../components/TournamentsData";

function Tournaments() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[90vh]">
      <TournamentsData
        tournaments={[
          { name: "Summer Cup", date: "2024-08-10", location: "New York" },
          {
            name: "Winter Championship",
            date: "2024-12-15",
            location: "Los Angeles",
          },
        ]}
      />
    </div>
  );
}
("nigga?");

export default Tournaments;
