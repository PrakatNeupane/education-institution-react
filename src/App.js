
import { useEffect, useState } from 'react';
import './App.css';
import { fetchDataFromApi } from './helper/axiosHelper';

function App() {
  const [dataFromApi, setDataFromApi] = useState([])
  useEffect(() => {
    fetchDataFromApi()
  })
  return (
    <div className="App">
      React fetch API

    </div>
  );
}

export default App;
