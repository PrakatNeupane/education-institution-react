import { useState } from 'react';
import './App.css';
import { fetchDataFromApi } from './helper/axiosHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayTable from './components/DisplayTable';
import Spin from './components/Spin';

function App() {
  const [dataFromApi, setDataFromApi] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleOnLoad = () => {
    setIsLoading(true)
    fetchDataFromApi().then(data => {
      setDataFromApi(data)
      setDisplayData(data)
      setIsLoading(false)
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
      {isLoading && <Spin />}
      <DisplayTable handleOnAdd={handleOnAdd} handleOnDelete={handleOnDelete} handleOnLoad={handleOnLoad} displayData={displayData} />
    </div>
  );
}

export default App;
