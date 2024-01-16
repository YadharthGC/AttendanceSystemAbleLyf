// import moment from "moment/moment";
// import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./Calendar.css";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Box, Grid } from "@mui/material";
import AllStudents from "./AllStudents";
import { Avatar, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function MyCalendar() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      attendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-14", status: "absent" },
        { date: "2024-01-13", status: "present" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      attendance: [
        { date: "2024-01-15", status: "absent" },
        { date: "2024-01-14", status: "present" },
        { date: "2024-01-13", status: "present" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 3,
      name: "Bob Johnson",
      attendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-14", status: "absent" },
        { date: "2024-01-13", status: "absent" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 4,
      name: "Alice Williams",
      attendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-14", status: "present" },
        { date: "2024-01-13", status: "present" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 5,
      name: "Charlie Brown",
      attendance: [
        { date: "2024-01-15", status: "absent" },
        { date: "2024-01-14", status: "absent" },
        { date: "2024-01-13", status: "absent" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 6,
      name: "Eva Green",
      attendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-14", status: "absent" },
        { date: "2024-01-13", status: "present" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 7,
      name: "David Wilson",
      attendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-14", status: "present" },
        { date: "2024-01-13", status: "absent" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 8,
      name: "Sophia Miller",
      attendance: [
        { date: "2024-01-15", status: "absent" },
        { date: "2024-01-14", status: "present" },
        { date: "2024-01-13", status: "absent" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 9,
      name: "Ryan Davis",
      attendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-14", status: "present" },
        { date: "2024-01-13", status: "present" },
        // Add more dates and statuses as needed
      ],
    },
    {
      id: 10,
      name: "Lily White",
      attendance: [
        { date: "2024-01-16", status: "present" },
        { date: "2024-01-14", status: "absent" },
        { date: "2024-01-13", status: "absent" },
        // Add more dates and statuses as needed
      ],
    },
  ]);
  const [presentStudents, setPresentStudents] = useState([]);

  useEffect(() => {
    try {
      handlePresentStudents();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePresentStudents = (dateStr) => {
    try {
      let today, yr, mm, dd;

      if (!dateStr) {
        today = new Date();
        yr = today.getFullYear();
        mm = today.getMonth() + 1;
        dd = today.getDate();
      }
      let totalToday = dateStr
        ? dateStr
        : yr + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);
      let presentStatus = [];

      for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].attendance.length; j++) {
          if (students[i].attendance[j].date === totalToday) {
            students[i].attendance[j].status === "present" &&
              presentStatus.push(students[i]);
            break;
          }
        }
      }

      console.log(presentStatus);
      setPresentStudents(presentStatus);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cardTitle">
        <div className="cardName">Attendance</div>
        <div className="cardAccount">
          <AccountCircleOutlinedIcon />
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box
            sx={{
              padding: "8px",
              backgroundColor: "#F4F6FA",
              borderRadius: "10px",
            }}
          >
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "prevYear prev today next nextYear",
                center: "title",
                end: "",
              }}
              dateClick={(e) => {
                console.log(e, e.dateStr);
                handlePresentStudents(e.dateStr);
              }}
              editable={true}
            />
          </Box>
        </Grid>
        <Grid item md={6}>
          <div>Students</div>
          <Grid container md={12} spacing={2}>
            {presentStudents.length ? (
              presentStudents.map((data, index) => {
                return (
                  <Grid key={index} item md={4}>
                    <Box
                      sx={{
                        padding: "3px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#F4F6FA",
                        borderRadius: "10px",
                      }}
                    >
                      <div className="avatarDiv">
                        <Avatar />
                      </div>
                      <div className="avatarName">{data.name}</div>
                      <div className="avatarID">
                        ({data.id}
                        {index})
                      </div>
                    </Box>
                  </Grid>
                );
              })
            ) : (
              <Grid item md={4}>
                <Box
                  sx={{
                    padding: "3px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "red",
                    borderRadius: "10px",
                  }}
                >
                  <div className="avatarDiv">
                    <Avatar />
                  </div>
                  <div className="avatarName">No Students were present</div>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
