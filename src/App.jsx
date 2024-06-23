import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box width="480px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
