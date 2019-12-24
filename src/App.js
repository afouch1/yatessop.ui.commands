import React, {useState} from 'react';
import './App.css';
import CommandNav from "./components/CommandNav";
import CommandInfo from "./components/CommandInfo";

const commands = [
    {
        "id": "5df53ba17a83486b0182b4ea",
        "commandName": "Z",
        "description": "Zooms to block",
        "keywords": [
            "zoom",
            "block"
        ],
        "img": null
    },
    {
        "id": "5dfea978e059e43905ebb2de",
        "commandName": "DUPLAY",
        "description": "duplicates layouts",
        "keywords": [
            "duplicate",
            "layouts"
        ],
        "img": null
    },
    {
        "id": "5dfea9cae059e43905ebb2df",
        "commandName": "GETLATLONG",
        "description": "Gets the latitude and longitude of the selected point",
        "keywords": [
            "latitude",
            "longitude",
            "coordinates"
        ],
        "img": null
    },
    {
        "id": "5dfeaa1ee059e43905ebb2e0",
        "commandName": "AM",
        "description": "Converts text or multileaders into a new multileader",
        "keywords": [
            "Multileader",
            "Text",
            "leader"
        ],
        "img": null
    }
];

function App() {
    let [state, setState] = useState({
        selectedCommand: ''
    });

    let handleSelectionChanged = (event) => {
        setState({
            selectedCommand: event.target.textContent
        })
        console.log(event.target.textContent)
    };

  return (
    <div className="App">
      <CommandNav selectedCommand={state.selectedCommand} selectionChanged={handleSelectionChanged} commands={commands}/>
      <CommandInfo />
    </div>
  );
}

export default App;
