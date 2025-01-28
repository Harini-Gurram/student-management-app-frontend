# Student Management Application

This is a React-based application designed for managing student data. It allows users to add, edit, and delete student records while providing a seamless user experience with real-time validation, search functionality, pagination, and interactive confirmation popups. The application is built with modern React features and leverages tools like react-toastify for notifications, ensuring smooth interactions for users.

<h3>Key Features</h3>
<ul>
  <li><h5>Form Validation:</h5></li>
  <p>The form inputs are validated to ensure that the name is a string, age is a positive integer, class grade is a string, and the phone number is a valid 10-digit number. All fields are required for successful form submission.</p>
![image_alt](https://github.com/Harini-Gurram/student-management-app-frontend/blob/master/SMS_confirmation.png?raw=true)

   <li><h5>Confirmation Popups:</h5></li>
  <p>Before a student record is deleted, a confirmation popup is displayed to confirm the action. The user can choose to either confirm or cancel the deletion, preventing accidental removals.</p>

   <li><h5>Toast Notifications:</h5></li>
  <p>Success and error messages are displayed using toast notifications from react-toastify. These messages inform the user about the status of their actions, such as adding, updating, or deleting a student.</p>

   <li><h5>Pagination:</h5></li>
  <p>The data table supports pagination, displaying a limited number of student records per page. This helps to keep the user interface clean and enhances usability when working with large datasets.</p>

  <li><h5>Search Functionality:</h5></li>
  <p>The search bar allows users to filter student records by name. As the user types in the search field, the table is dynamically filtered, showing only the students whose names match the search query.</p>
</ul>
