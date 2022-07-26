import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AppAutocomplete, AutocompleteOption } from "./AppAutocomplete";
import { TextField } from "@mui/material";

const options: AutocompleteOption[] = [
  { label: "First", value: "first" },
  { label: "Second", value: "second" },
];

function App() {
  const [value, setValue] = useState<AutocompleteOption | string>(""); // How to set empty value? I can set neither empty string nor null.

  return (
    <div className="App">
      <AppAutocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            inputProps={params.inputProps}
            InputProps={params.InputProps}
          />
        )}
        onChange={(e, value) => {
          setValue(value);
        }}
        value={value}
      />
    </div>
  );
}

export default App;
