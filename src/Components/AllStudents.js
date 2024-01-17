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
  const [name, setName] = useState("");
  const [openRegister, setOpenRegister] = useState(false);
  const [editStudent, setEditStudent] = useState(false);
  const [modalData, setModalData] = useState("");
  const webcamRef = useRef(null);

  useEffect(() => {
    try {
      setImdEncode([]);
      if (searchText === "") {
        setSearchStudents(students);
      }
    } catch (err) {
      console.log(err);
    }
  }, [searchText]);

  useEffect(() => {
    setStatus(false);
  }, [status]);

  const handleSearch = () => {
    try {
      console.log(searchText);
      let displayStudents = [];

      for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase().includes(searchText.toLowerCase())) {
          displayStudents.push(students[i]);
        }
      }
      setSearchStudents(displayStudents);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegisterModal = (types) => {
    try {
      if (openRegister) {
        setOpenRegister(false);
        setImdEncode([]);
        setName("");
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
      if (demArr.length === 3) {
        demArr.shift();
      }
      demArr.push(imgUrl);
      setImdEncode(demArr);
      setStatus(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (types) => {
    try {
      if (editStudent) {
        let defaultStudents = students;
        let filteredStudents = searchStudents;

        for (let i = 0; i < defaultStudents.length; i++) {
          if (defaultStudents[i].id === modalData.id) {
            defaultStudents[i].name = name;
            break;
          }
        }

        for (let i = 0; i < filteredStudents.length; i++) {
          if (filteredStudents[i].id === modalData.id) {
            filteredStudents[i].name = name;
            break;
          }
        }

        setStudents(defaultStudents);
        setSearchStudents(filteredStudents);
        // setStatus(true);
        handleRegisterModal();
      } else {
        let today = new Date();
        let yr = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        let todayStr =
          yr + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);

        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        const uniqueId = dateString + randomness;

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
      }
      setEditStudent(false);
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
              handleRegisterModal();
            }}
          >
            <AddSharpIcon />
          </Button>
        </div>
      </p>
      <p className="studentsTable">
        <Grid container spacing={2}>
          {searchStudents.map((data, index) => {
            return (
              <Grid item md={3}>
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
                        setImdEncode(data.images);
                        setName(data.name);
                        setEditStudent(true);
                        handleRegisterModal();
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
                      return link ? <img src={link} alt="nope" /> : "";
                    })
                  : ""}
                {!imgEncode.length ? (
                  <img
                    src={imageNotDefined}
                    className="noImg"
                    alt="imagenotavailable"
                  />
                ) : (
                  ""
                )}
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
