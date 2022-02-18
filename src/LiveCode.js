import axios from "axios";
import { useState, useEffect } from "react";

const LiveCode = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [results, setResults] = useState(10);

  useEffect(() => {
    getUserInfo();
  }, []);

  // console.log(userInfo);

  const URL = `https://randomuser.me/api/?results=${parseInt(results)}`;

  // API FETCH HERE:
  const getUserInfo = async () => {
    await axios
      .get(URL)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.results);
        setUserInfo(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResults = (e) => {
    setResults(e.target.value);
    console.log(results);
  };
  return (
    <>
      <h2>Live Code Example</h2>
      <p>
        Here we demonstrate an actual API fetch with{" "}
        <a href="https://randomuser.me/api/">Random User API</a>:
      </p>
      {/* <p>Results of API fetch:</p> */}
      {/* <label for="results"># of Results:</label>
      <select name="results" onChange={handleResults}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select> */}
      <ul>
        {/* list of random users */}
        {userInfo.map((e, i) => {
          console.log(e);
          return (
            <li key={i}>
              <b>
                {e.name.first} {e.name.last}
              </b>
              <ul>
                <li>Age: {e.dob.age}</li>
                <li>Location: {e.location.country}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LiveCode;
