import { 
  Box, 
  // Button 
} from "@mui/material";
import "./App.css";
// import DataGridDemo from "./Components/Grid-Table";
// import MultiSelect from "./Components/MultiSelect";
// import Search from "./Components/Search";
import PageNation from "./Components/pagenation";

function App() {
  // const arrayData: any[] = [];
  // const fetchAPIData = async () => {
  //   try {
  //     for (let i = 0; i < 100; i++) {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const data = await response.json();
  //       arrayData.push(data);
  //       // console.log(data);
  //     }
  //     console.log(arrayData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="App">
      {/* <Search />
      <MultiSelect />
      <DataGridDemo />
      <Button sx={{ margin: "10%" }} variant="contained" onClick={fetchAPIData}>
        API
      </Button> */}

      <br></br>
      <Box>
        <PageNation />
      </Box>
    </div>
  );
}

export default App;

/* */  