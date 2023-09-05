import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // Use the useNavigate hook

  // Define a function to handle the click event
  const handleH1Click = (path: string) => {
    navigate(path); // Remove curly braces around text
  };

  return (
    <>
      <div className="homepage">
        {/* Attach the onClick handler to each <h1> element */}
        <h1 onClick={() => handleH1Click("/About")}>About Axiom</h1>
        <h1 onClick={() => handleH1Click("/Artists")}>Artists</h1>
        <h1 onClick={() => handleH1Click("/Art")}>Art</h1>
      </div>
    </>
  );
}

export default HomePage;
