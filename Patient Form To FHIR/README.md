# FHIR Project

This project integrates a React frontend with a Django backend to manage patient data using the FHIR (Fast Healthcare Interoperability Resources) standard. The goal is to allow users to create, display, and manage patient information while interacting with a FHIR server.

## Features

- **React Frontend**:

  - User authentication (Login/Logout)
  - Patient creation and display
  - Patient data management via forms
  - Fetch and display data from a FHIR server

- **Django Backend**:
  - Handle CRUD operations for patient data
  - Integrate with the `fhir.resources` Python library to post data to a FHIR server
  - Handle form data passed from the React frontend

## Project Structure

```
/my-fhir-project
  ├── /frontend (React app)
  ├── /backend (Django app)
  └── /formatter.py (Handles JSON formatting)
```

## Setup Instructions

### Backend (Django)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-fhir-project.git
   cd my-fhir-project/backend
   ```

2. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up the Django project:

   ```bash
   python manage.py migrate
   python manage.py createsuperuser  # To create an admin user
   python manage.py runserver
   ```

4. The Django backend should now be running at `http://localhost:8000`.

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm run dev
   ```

4. The React frontend should now be running at `http://localhost:3000`.

### Connecting Backend and Frontend

- The frontend will send patient data to the Django backend, which will then use the `fhir.resources` library to post the data to a FHIR server.
- Make sure your Django backend is set up to interact with the FHIR server and that the necessary endpoints are available for the frontend to fetch and send data.

## Dependencies

### Backend (Django)

- Django
- fhir.resources
- pandas
- bcrypt
- rich
- tabulate
- validators

### Frontend (React)

- axios
- react-router-dom

## How to Use

1. **Login**: Use the login page to authenticate.
2. **Patient Management**:
   - Navigate to the Patient page to create a new patient using the form.
   - View the list of patients created and manage the data.
3. **FHIR Integration**:
   - When creating or updating a patient, the data is sent to the Django backend, which posts it to the FHIR server using the `FHIR API`.

## Future Enhancements

- Implement additional FHIR resource types.
- Add more complex patient management features, such as appointment scheduling or medical history tracking.
- Improve frontend with better UI/UX.

## License

This project is licensed under the MIT License.
