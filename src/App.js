
import { useEffect, useState } from 'react';
import './App.css';
import { fetchDataFromApi } from './helper/axiosHelper';

function App() {
  const [dataFromApi, setDataFromApi] = useState([])
  useEffect(() => {
    fetchDataFromApi().then(data => {
      setDataFromApi(data)
    })
  }, [])
  return (
    <div className="App">
      {dataFromApi.map((individualData, index) => (
        individualData.domains
      ))}
    </div>
  );
}

export default App;
