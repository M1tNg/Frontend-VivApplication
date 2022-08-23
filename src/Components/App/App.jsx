import React from "react";
import Navbar from "../Page1/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Page1 from "../Page1/Page1";
import EditAct from "../EditActivity/EditActivity";
import CreateAct from "../CreateActivity/CreateActivity";
import Calendar from "../Calendar/Calendar";
import PieChartMonth from "../Piechart/Piechart_month";
import Login from '../Login/login';
import Signup from '../Signup/signup';
import AdminRoute from "./adminRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route element={<AdminRoute />}>
        <Route path="/" element={<Page1 />} />
        <Route path="/create" element={<CreateAct />} />
        <Route path="/edit/:id" element={<EditAct />} />
        <Route path="/schedule" element={<Calendar />} />
        <Route path="/summary-Month" element={<PieChartMonth />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
