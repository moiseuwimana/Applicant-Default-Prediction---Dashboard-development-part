import React from "react";
import './Records.css'

function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <div>     
      <input
        className="custom-input custom-height"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="&#128269;"
      />
    </div>
  );
}

export default ColumnFilter;
