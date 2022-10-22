import { useState } from 'react';
import './App.css';
import { fetchDataFromApi } from './helper/axiosHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [dataFromApi, setDataFromApi] = useState([])
  const [displayData, setDisplayData] = useState([])

  const handleOnLoad = () => {
    fetchDataFromApi().then(data => {
      setDataFromApi(data)
      setDisplayData(data)
    })
    console.log(dataFromApi)
  }

  const handleOnDelete = () => {
    dataFromApi.pop()
    console.log(dataFromApi)
    setDisplayData([...dataFromApi])
  }

  const handleOnAdd = () => {

  }

  return (
    <div className="App">

      <div className='buttons'>
        <Button className='btn btn-primary me-1' onClick={handleOnLoad}>LOAD</Button>
        <Button className='btn btn-danger me-1' onClick={handleOnDelete}>DELETE</Button>
        <Button className='btn btn-info' onClick={handleOnAdd}>ADD</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Institution Name</th>
            <th>Website</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>

          {displayData.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td><a href={item.web_pages[0]} target='none'>{item.web_pages[0]}</a></td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
