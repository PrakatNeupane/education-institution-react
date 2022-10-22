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

  const handleOnLoad = () => {
    fetchDataFromApi().then(data => {
      setDataFromApi(data)
    })
  }

  const handleOnDelete = () => {

  }

  const handleOnAdd = () => {

  }

  return (
    <div className="App">

      <div>
        <Button className='btn btn-primary' onClick={handleOnLoad}>LOAD</Button>
        <Button className='btn btn-danger'>DELETE</Button>
        <Button className='btn btn-info'>ADD</Button>
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

          {dataFromApi.map((item, i) => (
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
