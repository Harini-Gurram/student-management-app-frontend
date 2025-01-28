export const editStudent = async (studentId, updatedData) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/update/${studentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update student");
    }

    return await response.json();
  } catch (error) {
    console.error("Error editing student:", error);
    throw error;
  }
};
