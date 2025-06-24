##  How to Run the Project (Django + React)

Follow the steps below to set up and run both the **Django backend** and **React frontend**.

---

###  1. Start the Django Backend

```bash
# Step 1: Navigate to the backend folder
cd server

# Step 2: Create a virtual environment
python -m venv env

# Step 3: Activate the virtual environment
# On Windows:
env\Scripts\activate

# On macOS/Linux:
source env/bin/activate

# Step 4: Install Python dependencies
pip install -r requirements.txt


---


###  2. Create the .env file

# Django Secret Key
SECRET_KEY=your-django-secret-key

# PostgreSQL Database Credentials
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432


---


###  3. Apply Migrations and Start the Django Server

# Make migrations (only needed after model changes)
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver


The backend will be live at: http://localhost:8000/


---


###  4. Start the React Frontend

Open a new terminal window and run:

# Step 1: Navigate to the React app folder
cd client

# Step 2: Install frontend dependencies
npm install

# Step 3: Start the React development server
npm start
