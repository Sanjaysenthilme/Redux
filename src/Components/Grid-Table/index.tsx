import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { setCount } from "../../Store/Slice/TableData";
import { getMockAPIRequest } from "../../Store/Slice/TableData";
import { useDispatch, useSelector } from "../../Store";

export default function DataGridDemo() {
  const dispatch = useDispatch();

  const { count, data } = useSelector((state: any) => state.tableData);

  useEffect(() => {
    dispatch(getMockAPIRequest());
  }, [dispatch]);

  const handleIncrease = () => {
    dispatch(setCount(count + 1));
  };

  const handleDecrease = () => {
    dispatch(setCount(count - 1));
  };

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "id",
      headerName: "Order Id",
      type: "number",
      width: 90,
      editable: false,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "assignee",
      headerName: "Assignee",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "model",
      headerName: "Model",
      type: "string",
      sortable: false,
      width: 160,
    },
    {
      field: "floors",
      headerName: "Floors",
      type: "string",
      sortable: false,
      width: 160,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableColumnSorting
        disableColumnMenu
        disableColumnResize
        disableColumnFilter
        disableRowSelectionOnClick
      />

      <Box>
        <p>Button Count : {count} </p>
        <Button variant="contained" onClick={handleIncrease}>
          Increase
        </Button>
        <Button variant="contained" onClick={handleDecrease}>
          Decrease
        </Button>
      </Box>
    </Box>
  );
}
