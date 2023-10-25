import { useState } from "react";

import { UserList } from "./types";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { getUserList } from "../api/apis";

import { filteredUserData } from "./utils";

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

const StyledBanner = styled(Grid)({
  width: "100%",
  height: "100vh",
  backgroundColor: "#EAF3F4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function Homepage() {
  const [userList, setUserList] = useState<UserList[]>([]);
  //   const [user, setUser] = useState<UserList>({ name: "", email: "" });
  const user = filteredUserData();

  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  function generateUser() {
    getUserList().then((res) => {
      setOpen(true);
      localStorage.setItem("userData", JSON.stringify(res));
      //   setUser(filteredUserData(res));
    });
  }

  function addUsertoList() {
    setUserList([
      ...userList,
      {
        name: user.name,
        email: user.email,
      },
    ]);
  }

  return (
    <>
      <StyledBanner>
        <Button variant="outlined" onClick={generateUser}>
          Generate
        </Button>
      </StyledBanner>
      <section id="table">
        {userList.map((users, key) => {
          return (
            <ul key={key}>
              <li>{users.name}</li>
              <li>{users.email}</li>
            </ul>
          );
        })}
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>{user.name}</Typography>
          <Typography>{user.email}</Typography>
          <Button onClick={addUsertoList}>Add</Button>
        </Box>
      </Modal>
    </>
  );
}

export default Homepage;
