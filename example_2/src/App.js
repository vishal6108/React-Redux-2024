import CoreConcepts from "./components/core_concepts";
import Example from "./components/example";
import Header from "./components/Header/header";

function App() {
  //onClick={() => (setVisibility(true))}
  return (
    <div className="App">
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </div>
  );
}

export default App;
