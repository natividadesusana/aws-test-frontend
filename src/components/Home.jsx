import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  async function addNewName() {
    const API_URL = process.env.REACT_APP_BACK_END_URL;
    try {
      const { data } = await axios.get(`${API_URL}/add`);
      alert("Name added successfully!");
    } catch (error) {
      console.log(error);
      alert("Error! The record has not been added!");
    }
  }
  
  return <>
    <h1>Register Names - Updated Version 27.10 🌙</h1>
    <div><Link to="/names">See all names</Link></div>
    <br />
    <button onClick={addNewName}>Add new name</button>
  </>
}

export default App;