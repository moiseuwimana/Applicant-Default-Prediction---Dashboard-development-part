import React, { useMemo } from "react";
import { useData } from "../API/DataContext";
// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
// } from "@tanstack/react-table";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";

import "./Records.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { Checkbox } from "./Checkbox";

function Records2() {
  const { data } = useData();
  // Move COLUMNS and columns outside the conditional blocks
  // const COLUMNS = Object.keys(data.data[0]).map((name) => ({
  //   Header: name,
  //   accessor: name,
  //   Footer: name,
  // }));

  const column_group = [
    {
      "Applicant Information": [
        "Loan ID",
        "Gender",
        "Married",
        "Dependents",
        "Education",
        "Self Employed",
      ],
    },
    {
      "Financial Information": [
        "Applicant Income",
        "Coapplicant Income",
        "Loan Amount",
        "Loan Amount Term",
        "Credit History",
      ],
    },
    {
      "Property Information": ["Property Area"],
    },
    {
      "Loan Status": ["Loan Status"],
    },
  ];

  

  const COLUMNSgroup = column_group.map((group) => ({
    Header: Object.keys(group)[0],
    Footer: Object.keys(group)[0],
    columns: Object.values(group)[0].map((subgroup) => ({
      Header: subgroup,
      accessor: subgroup,
      Footer: subgroup,
    })),
  }));

  // const c = column_group.map((group)=>(
  //   Object.values(group)[0]
  // ))

  // const COLUMNgroup = [
  //   {
  //     Header: "Applicant Information",
  //     columns: [
  //       {
  //         accessor: "Loan ID",
  //         Header: "Loan ID",
  //       },
  //       {
  //         accessor: "Gender",
  //         Header: "Gender",
  //       },
  //       {
  //         accessor: "Married",
  //         Header: "Married",
  //       },
  //       {
  //         accessor: "Dependents",
  //         Header: "Dependents",
  //       },
  //       {
  //         accessor: "Education",
  //         Header: "Education",
  //       },
  //       {
  //         accessor: "Self Employed",
  //         Header: "Self Employed",
  //       },
  //     ],
  //   },
  //   {
  //     Header: "Financial Information",
  //     columns: [
  //       {
  //         accessor: "Applicant Income",
  //         Header: "Applicant Income",
  //       },
  //       {
  //         accessor: "Coapplicant Income",
  //         Header: "Coapplicant Income",
  //       },
  //       {
  //         accessor: "Loan Amount",
  //         Header: "Loan Amount",
  //       },
  //       {
  //         accessor: "Loan Amount Term",
  //         Header: "Loan Amount Term",
  //       },
  //       {
  //         accessor: "Credit History",
  //         Header: "Credit History",
  //       },
  //     ],
  //   },
  //   {
  //     Header: "Property Information",
  //     columns: [
  //       {
  //         accessor: "Property Area",
  //         Header: "Property Area",
  //       },
  //     ],
  //   },
  //   {
  //     Header: "Loan Status",
  //     columns: [
  //       {
  //         accessor: "Loan Status",
  //         Header: "Loan Status",
  //       },
  //     ],
  //   },
  // ];

  const DATA = useMemo(() => Object.values(data.data), []);
  const columns = useMemo(() => COLUMNSgroup, []);
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  // const table = useReactTable({
  //   data: DATA,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data: DATA,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    // useSortBy
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  React.useEffect(()=>{
    setPageSize(10)
  },[])

  return (
    <div className="container">
      <div className="">
        <div className="row">
          <div className="col-2 col-sm-4 col-md-3 col-lg-2">
            <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
          </div>
          {allColumns.map((column) => (
            <div className="col-2 col-sm-4 col-md-3 col-lg-2" key={column.id}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          ))}
          <div className="col-2 col-sm-4 col-md-3 col-lg-2">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>

        <div className="row">
          <div className="table-container ms-2">
            <table className="table" {...getTableProps}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}

                        {/* <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span> &#8681;</span>
                      ) : (
                        <span> &#8679;</span>
                      )
                    ) : (
                      ""
                    )}
                  </span> */}

                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps}>{cell.render("Cell")}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
              {/* <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot> */}
            </table>
          </div>
        </div>

        <div className="row">
          <span className="col-lg-4">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>

          <span className="col-lg-4">
            | Go to page:{" "}
            <input
              className="form-control d-inline custom-height"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const newPageIndex = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(newPageIndex);
              }}
              style={{ width: "50px" }}
            />
          </span>

              {/* <select value={pageSize}></select> */}


          <div className="col-lg-4">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>

            <button
              className="btn btn-sm btn-outline-primary me-3"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>

            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>

            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records2;
