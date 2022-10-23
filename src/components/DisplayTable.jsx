import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const DisplayTable = ({
  handleOnLoad,
  handleOnDelete,
  handleOnAdd,
  displayData,
}) => {
  return (
    <div>
      <div className="buttons">
        <Button className="btn btn-primary me-1" onClick={handleOnLoad}>
          LOAD
        </Button>
        <Button className="btn btn-danger me-1" onClick={handleOnDelete}>
          DELETE
        </Button>
        <Button className="btn btn-info" onClick={handleOnAdd}>
          ADD
        </Button>
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
              <td>
                <a href={item.web_pages[0]} target="none">
                  {item.web_pages[0]}
                </a>
              </td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayTable;
