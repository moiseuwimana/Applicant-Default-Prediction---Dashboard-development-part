import React from "react";
import DataTable from "react-data-table-component";
import { useData } from "../API/DataContext";

function Records() {
  const { data, loading, error } = useData();
  if (data) {
    const columnsName = Object.keys(data.data[0])
    const columns = columnsName.map((columnName)=>(
      {
        name: columnName,
        selector: row => row[`${columnName}`]
        }
    ))
    const dt = Object.values(data.data)


    return (
      <div className="container">
        <DataTable columns={columns} data={dt} fixedHeader selectableRows/>
      </div>
    )
  }
  

  if (error) {
    return <div>Erro: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading data...</div>;
  }
}

export default Records;
