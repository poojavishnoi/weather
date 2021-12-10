import "./App.css";
import React,{useState} from 'react'

function App() {
  const API_KEY = "ba4494ebed6f4e57acf132531211012";
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [text, setText] = useState("");
  const [temp, setTemp] = useState();
  const [img, setImage] = useState(""); 
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

  function clickHandler() {
    console.log("clicked");
    fetch(url)
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      console.log(data);
      setName(data.location.name)
      setRegion(data.location.region)
      setText(data.current.condition.text)
      setTemp(data.current.temp_c)
      setImage(data.current.condition.icon)

    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <div className="App">
      <div className="location">
        <input
          type="text"
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter the city"
        />
        <button onClick={clickHandler}>Check</button>
      </div>
      <div className="weather-deatils">
        <h1>{name}</h1>
        <span>{region}</span>
        <h2>{text}</h2>
        <h1 id="temp">{temp}</h1>
        <img src={img}></img>
        </div>
    </div>
  );
}

export default App;
