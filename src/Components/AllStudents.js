import React, { useEffect, useRef, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./AllStudents.css";
import {
  Avatar,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { sampleJson } from "../sampleJson";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import Webcam from "react-webcam";
import imageNotDefined from "../images/imgNot.jpg";
import { styled, useTheme } from "@mui/system";

export default function AllStudents() {
  const [students, setStudents] = useState(sampleJson);
  const [searchStudents, setSearchStudents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);
  const [imgEncode, setImdEncode] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
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
        setGender("");
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
            defaultStudents[i].gender = gender;
            break;
          }
        }

        for (let i = 0; i < filteredStudents.length; i++) {
          if (filteredStudents[i].id === modalData.id) {
            filteredStudents[i].name = name;
            filteredStudents[i].gender = gender;
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

  const CssTextField = styled(TextField)({
    // "& label.Mui-focused": {
    //   color: "#FFFFFF",
    // },
    "& .css-batk84-MuiInputBase-root-MuiFilledInput-root::after": {
      borderBottom: "2px solid #FFFFFF",
    },
  });

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
            color={"warning"}
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
                        setGender(data.gender);
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
            <Grid container>
              <Grid item md={6}>
                <Box>
                  <div>
                    <Webcam
                      id="photoWeb"
                      audio={false}
                      screenshotFormat="image/jpeg"
                      ref={webcamRef}
                    />
                  </div>
                  <div className="submitSec">
                    <Button
                      variant="contained"
                      id="takePicBtn"
                      onClick={() => {
                        handleScreenShot();
                      }}
                    >
                      Take Picture
                    </Button>
                  </div>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Grid container md={12}>
                  <Grid item md={12}>
                    <Box>
                      <div className="displayImages">
                        <div className="capturedImg">
                          {imgEncode.length
                            ? imgEncode.map((link) => {
                                return link ? (
                                  <img src={link} alt="nope" />
                                ) : (
                                  ""
                                );
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
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Box>
                      <div className="nameAndGender">
                        <div style={{ flex: "5", padding: "3px" }}>
                          <CssTextField
                            id="filled-basic"
                            label="Full Name"
                            variant="filled"
                            fullWidth
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                        <div style={{ flex: "5", padding: "3px" }}>
                          <FormControl fullWidth>
                            <InputLabel variant="filled" id="genderSelect">
                              Gender
                            </InputLabel>
                            <Select
                              id="filled-basic"
                              variant="filled"
                              label="Gender"
                              value={gender}
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            >
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div
                        className="submitBtn"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => {
                            handleSubmit();
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
    </>
  );
}
