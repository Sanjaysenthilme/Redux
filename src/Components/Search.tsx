import { TextField } from "@mui/material";
import React from "react";

interface Items {
  id: string;
  name: string;
  age: number;
}
const items: Items[] = [
  { id: "123", name: "John", age: 25 },
  { id: "234", name: "Alice", age: 30 },
  { id: "345", name: "Bob", age: 28 },
];

const Search = () => {
  const [searchText, setSearchText] = React.useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filterText = items.filter((item) => {
    const searchLower = searchText.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.id.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      {/* search input */}
      <TextField
        id="outlined-controlled"
        label="Search"
        onChange={handleSearch}
        value={searchText}
      />
      <ul>
        {filterText.map((item, index) => (
          <li key={index}>
            {item.id} {item.name} {item.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;
