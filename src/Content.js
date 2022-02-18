import AxiosLogo from "./images/axios.png";
import ReactLogo from "./images/react.png";
import Screen1 from "./images/screenshot1.png";

const Content = () => {
  return (
    <>
      <h2>Intro</h2>
      <img src={ReactLogo} alt="axios logo" className="reactlogo" />

      <img src={AxiosLogo} alt="axios logo" className="axioslogo" />
      <p>
        {" "}
        Thanks to Axios, making HTTP requests in React has never been easier!
        <br />
        Here is a quick overview of how it works:
      </p>

      <div className="lesson">
        <h2>Step 1</h2>
        <div className="lesson-body">
          <div className="explanation">
            First install axios using your preferred package manager:
          </div>
          <code className="code">
            $ npm install axios <br />
            $ bower install axios <br />$ yarn add axios
          </code>
        </div>

        <div className="lesson">
          <h2>Step 2</h2>
          <div className="lesson-body">
            <div className="explanation">
              In order to use axios methods we need to import it into our
              project:
            </div>
            <code className="code">import axios from 'axios';</code>
          </div>
        </div>

        <div className="lesson">
          <h2>Step 3</h2>
          <div className="lesson-body">
            <div className="explanation">
              Next, set up a useState using React Hooks to contain the data we
              will be importing. As a default we will set the useState to an
              empty array:
            </div>
            <code className="code">
              const [userInfo, setUserInfo] = useState("");
            </code>
          </div>
        </div>

        <div className="lesson">
          <h2>Step 4</h2>
          <div className="lesson-body">
            <div className="explanation">
              We will now set the URL of our API endpoint to be used later in
              the fetching statement. We recommend the Random User API:
            </div>
            <code className="code">
              let URL = 'https://randomuser.me/api/?results=10'
            </code>
          </div>
        </div>

        <div className="lesson">
          <h2>Step 5</h2>
          <div className="lesson-body">
            <div className="explanation">
              Now create the function which will be called to perform the actual
              fetch. Our API fetch will be contained within this:
            </div>
            <code className="code">
              {`const APIfetch = async () =>{
}`}
            </code>
          </div>
        </div>

        <div className="lesson">
          <h2>Step 6</h2>
          <div className="lesson-body">
            <div className="explanation">
              Now we can get the response from our request. Axios takes care of
              parsing the data from our request, which means we can access it
              easily without further lines of code.
            </div>
            <code className="code">
              {`.then((response) => {
    console.log(response);
    console.log(response.data);
    console.log(response.data.results);
  }) `}
            </code>
          </div>
          <div className="lesson-body">
            <div className="explanation">
              By logging the response to the console, you can see the data that
              we get back:
            </div>
          </div>
          <img
            src={Screen1}
            alt="screen shot of console log result\"
            style={{ margin: "15px" }}
          />
        </div>

        {/* END  */}
        <p>
          <br />
          <br />
          <br />
          For more information please read the{" "}
          <a href="https://axios-http.com/docs/intro">Axios documentation</a>
        </p>
        {/* 
        <br />
        <a href="https://axios-http.com/docs/intro">Axios documentation</a> */}
      </div>
    </>
  );
};

export default Content;
