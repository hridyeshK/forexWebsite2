import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";


export default function Dropdown1(props) {
  const [cur, setCur] = React.useState("");

  useEffect(() => {
    if (props.fun1) {
      props.fun1(cur);
    }
  }, [cur, props]);

  const handleChange = (event) => {
    setCur(event.target.value);
  };

  const a = props.arr.map((x, i) => (
    <MenuItem value={props.arr[i]}>{props.arr[i]}</MenuItem>
  ));

  return (
    <Box sx={{ minWidth: 120 }} style={{ width: "40%", margin: "0 auto" }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{ backgroundColor: "#000000" }}
        >
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cur}
          label="cur"
          onChange={handleChange}
        >
          {a}
        </Select>
      </FormControl>
    </Box>
  );
}
