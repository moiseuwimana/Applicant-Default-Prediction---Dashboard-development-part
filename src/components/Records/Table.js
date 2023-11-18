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
  useBlockLayout
} from "react-table";

import "./Records.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { Checkbox } from "./Checkbox";
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";

function Table() {
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
      ], "sticky":''
    },
    {
      "Financial Information": [
        "Applicant Income",
        "Coapplicant Income",
        "Loan Amount",
        "Loan Amount Term",
        "Credit History",
      ], "sticky":''
    },
    {
      "Property Information": ["Property Area"],"sticky":''
    },
    {
      "Loan Status": ["Loan Status"],'sticky': "right",
    },
  ];

  // const c = column_group.map((group) => Object.keys(group)[0]);
  // console.log("hdddi", c);

  const COLUMNSgroup = column_group.map((group) => ({
    Header: Object.keys(group)[0],
    Footer: Object.keys(group)[0],
    sticky: group['sticky'],
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
  //     sticky: "",
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
  //     sticky: "right",
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
    usePagination,
    useBlockLayout,
    useSticky
  );

  const { globalFilter, pageIndex } = state;

  return (
    // <div>
    //   <table>
    //     {/* <thead>
    //     {table.getHeaderGroups().map(headerGroup=>(
    //       <tr key={headerGroup['Loan ID']}>
    //         {headerGroup.headers.map(header=>(
    //           <th key={header['Loan ID']}>
    //             {flexRender(header.column.columnDef.header, header.getContext())}
    //           </th>
    //         ))}
    //       </tr>
    //     ))}
    //     </thead> */}

    //     <tbody>
    //       {table.getRowModel().rows.map((row) => (
    //         <tr key={row["Loan ID"]}>
    //           {row.getVisibleCells().map((cell) => (
    //             <td key={cell["Loan ID"]}>
    //               {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>

    //     <tfoot>
    //       {table.getFooterGroups().map((footerGroup) => (
    //         <tr key={footerGroup["Loan ID"]}>
    //           {footerGroup.headers.map((footer) => (
    //             <th key={footer["Loan ID"]}>
    //               {flexRender(
    //                 footer.column.columnDef.header,
    //                 footer.getContext()
    //               )}
    //             </th>
    //           ))}
    //         </tr>
    //       ))}
    //     </tfoot>
    //   </table>
    // </div>
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        {/* <div className="footer">
          {footerGroups.map((footerGroup) => (
            <div {...footerGroup.getHeaderGroupProps()} className="tr">
              {footerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="td">
                  {column.render('Footer')}
                </div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </Styles>
  );
}

export default Table;
