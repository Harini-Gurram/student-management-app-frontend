import DataTable from "react-data-table-component";
import "./DataTable.css";
import { useEffect, useState } from "react";
import { getAllStudents } from "../apis/getAllStudents";
import { columns } from "../constants";
import { deleteStudent } from "../apis/deleteStudent";
import EditStudentDialog from "./StudentDialog";
import { toast } from "react-toastify";
import ConfirmDialog from "./ConfirmDialog";

export default function TableComponent() {
  const [studentsData, setStudentsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsEditMode(true);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setSelectedStudent(null);
    setIsEditMode(false);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    getStudents();
  };

  const handleDelete = async (student) => {
    setStudentToDelete(student);
    setShowConfirmDialog(true);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  const confirmDelete = async () => {
    if (studentToDelete) {
      try {
        await deleteStudent(studentToDelete.id);
        getStudents();
        toast.success(`${studentToDelete.name} deleted successfully!`);
      } catch (error) {
        toast.error("Failed to delete student.");
      }
    }
    setShowConfirmDialog(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = studentsData.filter((student) =>
      student.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const getStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudentsData(data);
      setFilteredData(data);
    } catch (err) {}
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="data-table">
      <div className="search-add-section">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={handleAdd}>Add Student</button>
      </div>
      <DataTable
        // title="Student Data"
        columns={columns(handleEdit, handleDelete)}
        data={filteredData}
        pagination={filteredData?.length > 10}
        highlightOnHover
        responsive
      />
      {isDialogOpen && (
        <EditStudentDialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          student={selectedStudent}
          onSave={handleSave}
          isEditMode={isEditMode}
        />
      )}
      <ConfirmDialog
        show={showConfirmDialog}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        studentName={studentToDelete?.name}
      />
    </div>
  );
}
