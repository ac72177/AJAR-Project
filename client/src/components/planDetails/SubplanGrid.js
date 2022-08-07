
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

const columns = [
    { field: 'name', headerName: 'Name', width: 90 },
    { field: 'startDate', headerName: 'Start Date', width: 90 },
    { field: 'dueDate', headerName: 'Due Date', width: 90 },
    { field: 'isComplete', headerName: 'Complete?', width: 90 },
    // {
    //     field: 'startDate',
    //     headerName: 'Start Date',
    //     width: 200,
    //     renderCell: (params) => {
            
    //         if (params.value) {
    //             date = new Date(params.value)
    //             return
    //              <div>{date.toLocaleDateString("en-US", {
    //                 year: "numeric",
    //                 month: "2-digit",
    //                 day: "2-digit",
    //             })}
    //             </div>
    //         } else {
    //             <div></div>
    //         }

    //     }
    // }
];



export default function SubPlanGrid(props) {
    const rows = props.subplans
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}
