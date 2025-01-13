//The given Link is not working so implemented the same functionality and Ui with different data set!

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

 
  const addRecord = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 83) + 1; // Random number between 1 and 83
      const response = await axios.get(`https://swapi.dev/api/people/${randomNumber}/`, {
        headers: {
          Accept: "application/json",
        },
      });

      const newUser = {
        name: response.data.name,
        height: response.data.height,
        gender: response.data.gender,
      };

      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

 
  const deleteRecord = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  // CSS 

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      backgroundColor: "#f2f2f2",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
    },
    deleteButton: {
      padding: "5px 10px",
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Star Wars Characters</h1>
      <button onClick={addRecord} style={styles.button}>
        Add Record
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Height</th>
            <th style={styles.th}>Gender</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.height}</td>
              <td style={styles.td}>{user.gender}</td>
              <td style={styles.td}>
                <button onClick={() => deleteRecord(index)} style={styles.deleteButton}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;