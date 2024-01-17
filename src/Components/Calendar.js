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
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

export default function MyCalendar() {
  const [students, setStudents] = useState(sampleJson);
  const [presentStudents, setPresentStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);
  const [wantedDate, setWantedDate] = useState("");
  const [status, setStatus] = useState("false");

  useEffect(() => {
    try {
      handlePresentStudents();
      setStatus(false);
    } catch (err) {
      console.log(err);
    }
  }, [status]);

  const handlePresentStudents = (dateStr) => {
    try {
      let today,
        yr,
        mm,
        dd,
        todayStr,
        studentsPresent = [],
        studentsAbsent = [];

      if (!dateStr) {
        today = new Date();
        yr = today.getFullYear();
        mm = today.getMonth() + 1;
        dd = today.getDate();
      }

      todayStr = dateStr
        ? dateStr
        : yr + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);
      setWantedDate(todayStr);

      console.log(dateStr, students);

      for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].attendance.length; j++) {
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

  const handlePresentAbsent = (data, types) => {
    try {
      console.log(data);
      let studentsArr = students;
      for (let i = 0; i < studentsArr.length; i++) {
        if (data.id === studentsArr[i].id) {
          let attendance = studentsArr[i].attendance;
          for (let j = 0; j < attendance.length; j++) {
            if (wantedDate === attendance[j].date) {
              attendance[j].status = types === "present" ? "absent" : "present";
            }
          }
        }
      }
      setStudents(studentsArr);
      handlePresentStudents(wantedDate);
      // setStatus(true);
      // for (let i = 0; i < students.length; i++) {
      //   if (data.id === students[i].id) {
      //     let attendance = students[i].attendance;
      //     for (let j = 0; j < attendance.length; j++) {
      //       if (wantedDate === attendance[j].date) {
      //         attendance[j].status = "absent";
      //       }
      //     }
      //   }
      // }
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
                          <div>
                            <CloseTwoToneIcon
                              id="closeIcon"
                              onClick={() => {
                                handlePresentAbsent(data, "present");
                              }}
                            />
                          </div>
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
                          <div>
                            <DoneTwoToneIcon
                              id="tickIcon"
                              onClick={() => {
                                handlePresentAbsent(data, "absent");
                              }}
                            />
                          </div>
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
