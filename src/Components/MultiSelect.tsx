import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem, 
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  disableAutoFocusItem: true, 
};

const empName = ["ramesh", "rahul", "ram", "sanjay", "vinoth", "vijay"];

const MultiSelect = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;

    if (value.includes("all")) {
      if (personName.length === empName.length) {
        setPersonName([]);
      } else {
        setPersonName(empName);
      }
    } else {
      setPersonName(typeof value === "string" ? value.split(",") : value);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Employee Names
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Employee Names" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={menuProps}
        >
          {/* All option */}
          <MenuItem value="all">
            <Checkbox checked={personName.length === empName.length} />
            <ListItemText primary="All" />
          </MenuItem>

          {empName.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelect;
