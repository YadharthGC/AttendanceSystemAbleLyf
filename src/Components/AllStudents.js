import React, { useEffect, useRef, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./AllStudents.css";
import { Avatar, Box, Grid, Modal, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { sampleJson } from "../sampleJson";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import Webcam from "react-webcam";
import imageNotDefined from "../images/imgNot.jpg";

export default function AllStudents() {
  const [students, setStudents] = useState(sampleJson);
  const [searchStudents, setSearchStudents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);
  const [imgEncode, setImdEncode] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [name, setName] = useState("");
  const [openRegister, setOpenRegister] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    try {
      setImdEncode([]);
      if (searchText === "") {
        setSearchStudents(students);
      }
      setStatus(false);
    } catch (err) {
      console.log(err);
    }
  }, [searchText]);

  useEffect(() => {
    setStatus(false);
  }, [status]);

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

  const handleEditModal = () => {
    try {
      if (openEdit) {
        setOpenEdit(false);
      } else {
        setOpenEdit(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegisterModal = () => {
    try {
      if (openRegister) {
        setOpenRegister(false);
      } else {
        setOpenRegister(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleScreenShot = () => {
    try {
      let imgUrl = webcamRef.current.getScreenshot({});
      let demArr = imgEncode;
      demArr.push(imgUrl);
      console.log(demArr);
      //   demArr.push(imgUrl);
      setImdEncode(demArr);
      setStatus(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    try {
      console.log(imgEncode);
      console.log(name);

      let today = new Date();
      let yr = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();

      let todayStr =
        yr + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);

      const uniqueId = () => {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        return dateString + randomness;
      };

      let newObj = {
        id: uniqueId,
        name: name,
        gender: "Male",
        images: imgEncode,
        accountCreatedOn: todayStr,
        attendance: [],
      };
      let arr = students;
      arr.push(newObj);
      setStudents(arr);
      handleRegisterModal();
    } catch (err) {
      console.log(err);
    }
  };

  const [modalData, setModalData] = useState("");

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
              handleRegisterModal();
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
                        handleEditModal();
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
        open={openEdit}
        onClose={() => {
          handleEditModal();
        }}
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

      <Modal
        open={openRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="materialBox">
          <div>
            <div className="topHead">
              <div className="createAccount">Create Account</div>
              <div
                className="closeReg"
                onClick={() => {
                  handleRegisterModal();
                }}
              >
                x
              </div>
            </div>
            <hr />
            <div className="imgSec">
              <div className="forWebcam">
                <div>
                  <Webcam
                    id="photoWeb"
                    width={400}
                    audio={false}
                    height={200}
                    screenshotFormat="image/jpeg"
                    ref={webcamRef}
                  />
                </div>
                <div
                  onClick={() => {
                    handleScreenShot();
                  }}
                >
                  <span className="takePic">Take Picture</span>
                </div>
              </div>
              <div className="displayImages">
                {imgEncode.length
                  ? imgEncode.map((link) => {
                      return link ? (
                        <img src={link} alt="nope" />
                      ) : (
                        <img
                          src={imageNotDefined}
                          className="noImg"
                          alt="imagenotavailable"
                        />
                      );
                    })
                  : ""}
              </div>
            </div>
            <div className="nameTextBox">
              <input
                value={name}
                type="text"
                placeholder="full Name"
                className="nameInput"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="submitRegister">
              <input
                type="submit"
                className="submitRegisterInput"
                onClick={() => {
                  handleSubmit();
                }}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
