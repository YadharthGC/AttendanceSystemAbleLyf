import React, { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./AllStudents.css";
import { Avatar, Box, Grid, Modal, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { sampleJson } from "../sampleJson";
import AddSharpIcon from "@mui/icons-material/AddSharp";

export default function AllStudents() {
  const [students, setStudents] = useState(sampleJson);
  const [searchStudents, setSearchStudents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    try {
      if (searchText === "") {
        setSearchStudents(students);
      }
      setStatus(false);
    } catch (err) {
      console.log(err);
    }
  }, [searchText]);

  const handleSearch = () => {
    try {
      console.log(searchText);
      let displayStudents = [];

      for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase().includes(searchText.toLowerCase())) {
          displayStudents.push(students[i]);
        }
      }
      console.log(displayStudents);
      setSearchStudents(displayStudents);
    } catch (err) {
      console.log(err);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState("");

  const handleAddStudent = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

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
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="searchBtn">
          <Button
            variant="contained"
            onClick={(e) => {
              handleSearch();
            }}
          >
            Search
          </Button>
          <Button
            sx={{ backgroundColor: "yellow" }}
            variant="contained"
            onClick={(e) => {
              // handleSearch();
            }}
          >
            <AddSharpIcon />
          </Button>
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
        <Grid container spacing={2}>
          {searchStudents.map((data, index) => {
            return (
              <Grid
                item
                md={3}
                // className="studentContainer"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px",
                    borderRadius: "10px",
                    backgroundColor: "#F4F6FA",
                  }}
                >
                  <div className="avatarDiv">
                    <Avatar />
                  </div>
                  <div className="avatarName">{data.name}</div>
                  <div className="avatarEdit">
                    <EditIcon
                      id="editIcon"
                      onClick={() => {
                        setModalData(data);
                        handleOpen(data);
                      }}
                    />
                  </div>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>Edit {modalData.id}</div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={modalData.name}
              onChange={(e) => {
                setModalData({
                  ...modalData,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button
              variant="contained"
              onClick={(e) => {
                console.log(modalData);
                let defaultStudents = students;
                let filteredStudents = searchStudents;
                for (let i = 0; i < defaultStudents.length; i++) {
                  if (defaultStudents[i].id === modalData.id) {
                    defaultStudents[i].name = modalData.name;
                    break;
                  }
                }
                for (let i = 0; i < filteredStudents; i++) {
                  if (filteredStudents[i].id === modalData.id) {
                    filteredStudents[i].name = modalData.name;
                    break;
                  }
                }
                setStudents(defaultStudents);
                setSearchStudents(filteredStudents);
                setStatus(true);
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
