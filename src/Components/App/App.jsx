import React from 'react';
import Navbar from '../Page1/Navbar/Navbar';
import {  Route,  Routes } from "react-router-dom";
import Page1 from '../Page1/Page1'
import EditAct from "../EditActivity/EditActivity";
import CreateAct from "../CreateActivity/CreateActivity";
import Calendar from "../Calendar/Calendar";
import SummaryItemMonth from "../summaryItem_month/summaryItem_month"
import SummaryItemWeek from "../summaryItem_week/SummaryItem";


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create" element={<CreateAct />} />
        <Route path="/edit/:id" element={<EditAct />} />
        <Route path="/schedule" element={<Calendar />} />
        <Route path="/summary-Month" element={<SummaryItemMonth />} />
        <Route path="/summary-Week" element={<SummaryItemWeek />} />
      </Routes>
    </div>
  );

}

export default App;
