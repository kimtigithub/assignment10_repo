import Nav from "./components/Nav"
import Content from "./components/Content"
import Sidebar from "./components/Sidebar";
import { Box, Container, Grid } from "@mui/material";
import RightBar from "./components/Rightbar";
function App() {
  return (
    <div className="App">
      <Box>
        <Nav />
        <Container />
        <Grid container spacing={3} p={5}>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={6}>
            <Content />
          </Grid>
          <Grid item md={3}>
            <RightBar />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
