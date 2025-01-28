import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const columns = (handleEdit, handleDelete) => [
  {
    name: "Student Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Student Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Class",
    selector: (row) => row.classGrade,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => row.phoneNumber,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div style={{ display: "flex", gap: "10px" }}>
        <FaEdit
          style={{ cursor: "pointer", color: "#1976d2" }}
          onClick={() => handleEdit(row)}
        />

        <FaTrashAlt
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => handleDelete(row)}
        />
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
