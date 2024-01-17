import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./Calendar.css";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Box, Grid } from "@mui/material";
import AllStudents from "./AllStudents";
import { Avatar, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { sampleJson } from "../sampleJson";
import { Height } from "@mui/icons-material";

export default function MyCalendar() {
  const [students, setStudents] = useState(sampleJson);
  const [presentStudents, setPresentStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);

  useEffect(() => {
    try {
      handlePresentStudents();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePresentStudents = (dateStr) => {
    try {
      let today,
        yr,
        mm,
        dd,
        studentsPresent = [],
        studentsAbsent = [];

      if (!dateStr) {
        today = new Date();
        yr = today.getFullYear();
        mm = today.getMonth() + 1;
        dd = today.getDate();
      }

      let todayStr = dateStr
        ? dateStr
        : yr + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);
      console.log(dateStr, students);

      for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].attendance.length; j++) {
          console.log(students[i].attendance[j].date, dateStr);
          if (students[i].attendance[j].date === todayStr) {
            students[i].attendance[j].status === "present" &&
              studentsPresent.push(students[i]);
            students[i].attendance[j].status === "absent" &&
              studentsAbsent.push(students[i]);
            break;
          }
        }
      }

      setPresentStudents(studentsPresent);
      setAbsentStudents(studentsAbsent);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cardTitle">
        <div className="cardName">Attendance</div>
      </div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box id="calendarBox" style={{ height: "85vh" }}>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "prevYear prev today next nextYear",
                center: "title",
                end: "",
              }}
              dateClick={(e) => {
                console.log(e.dateStr);
                handlePresentStudents(e.dateStr);
              }}
              editable={true}
            />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box id="candidatesBox" style={{ height: "80vh" }}>
            <div>Students</div>
            <div style={{ maxHeight: "50%", overflow: "auto" }}>
              {presentStudents.length ? <div>Present Students</div> : ""}
              {presentStudents.length ? (
                <Grid container md={12} spacing={2}>
                  {presentStudents.map((data, index) => {
                    return (
                      <Grid key={index} item md={4}>
                        <Box id="studentsBox">
                          <div className="avatarDiv">
                            <Avatar />
                          </div>
                          <div className="avatarName">{data.name}</div>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                ""
              )}
            </div>
            <hr></hr>
            <div style={{ maxHeight: "50%", overflow: "auto" }}>
              {absentStudents.length ? <div>Absent Students</div> : ""}
              {absentStudents.length ? (
                <Grid container md={12} spacing={2}>
                  {absentStudents.map((data, index) => {
                    return (
                      <Grid key={index} item md={4}>
                        <Box id="studentsBox">
                          <div className="avatarDiv">
                            <Avatar />
                          </div>
                          <div className="avatarName">{data.name}</div>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                ""
              )}
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
