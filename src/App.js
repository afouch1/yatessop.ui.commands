import React, {useEffect, useState} from 'react';
import './App.css';
import CommandNav from "./components/CommandNav";
import CommandInfo from "./components/CommandInfo";

// const commands = [
//     {
//         "id": "5df53ba17a83486b0182b4ea",
//         "commandName": "Z",
//         "description": "Zooms to block",
//         "keywords": [
//             "zoom",
//             "block"
//         ],
//         "img": null
//     },
//     {
//         "id": "5dfea978e059e43905ebb2de",
//         "commandName": "DUPLAY",
//         "description": "duplicates layouts",
//         "keywords": [
//             "duplicate",
//             "layouts"
//         ],
//         "img": null
//     },
//     {
//         "id": "5dfea9cae059e43905ebb2df",
//         "commandName": "GETLATLONG",
//         "description": "Gets the latitude and longitude of the selected point",
//         "keywords": [
//             "latitude",
//             "longitude",
//             "coordinates"
//         ],
//         "img": null
//     },
//     {
//         "id": "5dfeaa1ee059e43905ebb2e0",
//         "commandName": "AM",
//         "description": "Converts any number of text or multileader objects into a new multileader object. All text objects previously selected will be deleted",
//         "keywords": [
//             "Multileader",
//             "Text",
//             "leader"
//         ],
//         "img": null
//     }
// ];

function App() {
    let [state, setState] = useState({
        selectedCommand: '',
        commands: []
    });

    useEffect(() => {
        fetch('https://localhost:5001/api/autocadcommands')
            .then(response => response.json())
            .then(data => {
                setState({commands: data});
                console.log(state.commands)
            });
    }, []);

    let handleSelectionChanged = (event) => {
        setState({
            selectedCommand: event.target.textContent,
            commands: state.commands
        })
    };

    let command = state.commands.find(cmd => cmd.commandName === state.selectedCommand);

  return (
    <div className="App">
      <CommandNav selectedCommand={state.selectedCommand}
                  selectionChanged={handleSelectionChanged}
                  commands={state.commands.sort((a, b) => a.commandName > b.commandName)} />
      <CommandInfo command={command} />
    </div>
  );
}

export default App;
