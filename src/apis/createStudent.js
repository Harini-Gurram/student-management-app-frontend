export const addStudent = async (studentData) => {
  const response = await fetch("http://localhost:8080/api/v1/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  if (!response.ok) {
    throw new Error("Failed to add student");
  }

  return response.json();
};
