import "./main.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import data from "./data";

function App() {
  const journalContents = data.map((journal) => {
    return <Content key={journal.id} {...journal} />;
  });
  return (
    <div className="App">
      <Navbar />
      {journalContents}
    </div>
  );
}

export default App;
