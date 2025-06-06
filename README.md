## FakePay

**FakePay** is a simulated payment application designed to demonstrate core functionalities of a digital wallet and transaction processing. It provides a platform to explore how payments can be made and managed in a simplified environment.

---

## ✨ Features

- **Balance automation**: Fake money will be added to the user's account after signup.  
- **Search for Users**: Easily find other users within the application to facilitate transactions.  
- **Dynamic Balance Display**: View real-time updates of your account balance.  
- **Send Money**: Transfer funds between specific accounts, with immediate debiting and crediting.   
- **User Interface**: A simple and intuitive web-based interface for interaction.  

### Planned Features

- **Transaction History**: A feature to view a detailed record of all past transactions is planned for future development.
- **Payment Feature**: A feature to search for users using their email id and then allowing transactions.
- **Transaction History**: A feature to hide and show account balance.

---

## 🛠️ Technologies Used

- **JavaScript**: Used across both the frontend and backend to handle application logic, data manipulation, and user interaction.  
- **React**: Powers the frontend interface, enabling dynamic rendering of wallet balances, user search results, and transaction flows in real-time.  
- **Tailwind CSS**: Used for designing the user interface with utility-first classes, ensuring a responsive, clean, and modern look without writing custom CSS.  
- **Express**: Handles the backend logic, including routing and APIs for sending/receiving funds and managing user data.  
- **HTML**: Provides the basic structure for the React components and application pages.  

---

## ⚙️ Installation & Setup

To run FakePay locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Anmollw/FakePay.git
cd FakePay
```

---

### 2. Backend Setup

Navigate to the `backend` directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Create a `.env` file and add your MongoDB connection string:

```env
mongodb_url=<your_mongodb_connection_string>
```

Start the backend server:

```bash
npm start
```

By default, this runs the Express API and connects to your MongoDB instance using the `mongodb_url` environment variable.

---

### 3. Frontend Setup

Open a new terminal and navigate to the `frontend` directory:

```bash
cd ../frontend
```

Install frontend dependencies:

```bash
npm install
```

Create a `.env` file and set the backend API URL:

```env
VITE_API_URL=http://localhost:5000
```

> Replace `http://localhost:5000` with the actual backend URL if it's different.

Start the frontend development server:

```bash
npm run dev
```

This will launch the React frontend, which communicates with the backend using the `VITE_API_URL` environment variable.

---

Now both your frontend and backend should be running and connected properly!

---

## 💡 Usage

Once the application is running, you can interact with the FakePay interface to:

- **Create accounts**: Set up new user accounts within the simulation.   
- **Search for users**: Find specific users to transact with.  
- **Send money**: Initiate transfers to other accounts.  

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

---
