import { useState } from 'react';
import './App.css';
import { fetchDataFromApi } from './helper/axiosHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayTable from './components/DisplayTable';

function App() {
  const [dataFromApi, setDataFromApi] = useState([])
  const [displayData, setDisplayData] = useState([])

  const handleOnLoad = () => {
    fetchDataFromApi().then(data => {
      setDataFromApi(data)
      setDisplayData(data)
    })
  }

  const handleOnDelete = () => {
    dataFromApi.pop()
    setDisplayData([...dataFromApi])
  }

  const handleOnAdd = () => {
    dataFromApi.push(dataFromApi[0])
    setDisplayData([...dataFromApi])
  }

  return (
    <div className="App">
      <DisplayTable handleOnAdd={handleOnAdd} handleOnDelete={handleOnDelete} handleOnLoad={handleOnLoad} displayData={displayData} />
    </div>
  );
}

export default App;
