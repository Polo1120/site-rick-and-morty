import {useState}from "react";
import "./App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";




function App() {

  const [query, setQuery] = useState('');
  const [loading] = useState(false);  

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
      <Header query={query} onSearch={handleSearch} loading={loading} />
      <Characters  query={query}/>
    </div>
  );
}

export default App;
