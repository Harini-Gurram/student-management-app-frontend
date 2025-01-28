export const getAllStudents = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/students");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch students:", error);
    throw error;
  }
};
