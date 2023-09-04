import { useEffect, useState } from "react";
import { fetchData } from "./api";
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import StatContainer from './components/StatContainer';

function App() {
  const [footballData, setFootballData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [matchTime, setMatchTime] = useState("FT");

  useEffect(() => {
    setIsLoading(true);
    fetchData().then((response) => {
      setIsLoading(false);
      setFootballData(response.data.match);
    });
  }, [matchTime]);

  if (isLoading) {
    return <h3>Info loading...</h3>;
  }

  return (
    <div className="App">
      <Header data={footballData}/>
      <Menu />
      <StatContainer />


    </div>
  );
}

export default App;
