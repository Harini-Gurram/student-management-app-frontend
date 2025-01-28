export const deleteStudent = async (studentId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/students/${studentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete student");
    }

    return true;
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};
