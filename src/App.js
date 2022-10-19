
import { useEffect, useState } from 'react';
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
  // useEffect(() => {
  //   fetchDataFromApi().then(data => {
  //     setDataFromApi(data)
  //   })
  // }, [])

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
          <tr>
            {dataFromApi.map((individualData, index) => {
              return (
                <div>
                  <td>{index + 1}</td>
                  <td>{individualData.name}</td>
                  <td>{individualData.web_pages}</td>
                  <td>{individualData.country}</td>
                </div>
              )
            }
            )}

          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
