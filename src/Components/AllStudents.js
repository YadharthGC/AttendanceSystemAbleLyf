import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./AllStudents.css";
import { Avatar, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export default function AllStudents() {
  const [studentsData, setStudentsDta] = useState([
    {
      name: "Ganesh",
      id: "e407",
      attendance: "75%",
    },
    {
      name: "Rajesh",
      id: "e407",
      attendance: "5%",
    },
    {
      name: "Mani",
      id: "e407",
      attendance: "15%",
    },
    {
      name: "Kumar",
      id: "e407",
      attendance: "45%",
    },
    {
      name: "Vishal",
      id: "e407",
      attendance: "95%",
    },
    {
      name: "Vicky",
      id: "e407",
      attendance: "75%",
    },
    {
      name: "Mithra",
      id: "e407",
      attendance: "75%",
    },
    {
      name: "Mugesh",
      id: "e407",
      attendance: "65%",
    },
    {
      name: "Sugan",
      id: "e407",
      attendance: "45%",
    },
    {
      name: "Muruga",
      id: "e407",
      attendance: "35%",
    },
    {
      name: "Vela",
      id: "e407",
      attendance: "25%",
    },
  ]);

  return (
    <>
      <div className="cardTitle">
        <div className="cardName">Students Details</div>
        <div className="cardAccount">
          <AccountCircleOutlinedIcon />
        </div>
      </div>
      <p className="searchStudents">
        <div className="searchText">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </div>
        <div className="searchBtn">
          <Button variant="contained">Search</Button>
        </div>
      </p>
      <p className="studentsTable">
        {/* <div className="studentContainer">
          <div className="avatarDiv">
            <Avatar />
          </div>
          <div className="avatarName">Ganesh</div>
          <div className="avatarID">e407098</div>
          <div className="avatarAttendance">Attendance: 75%</div>
          <div className="avatarEdit">
            <EditIcon />
          </div>
        </div> */}
        {studentsData.map((data, index) => {
          return (
            <div className="studentContainer">
              <div className="avatarDiv">
                <Avatar />
              </div>
              <div className="avatarName">{data.name}</div>
              <div className="avatarID">
                {data.id}
                {index}
              </div>
              <div className="avatarAttendance">
                Attendance: {data.attendance}
              </div>
              <div className="avatarEdit">
                <EditIcon />
              </div>
            </div>
          );
        })}
      </p>
    </>
  );
}
