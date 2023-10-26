import { useState } from "react";

import { UserList } from "./types";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { getUserList } from "../api/apis";

import { getUserData } from "./utils";

const StyledModal = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const StyledModalContainer = styled(Grid)({
  backgroundColor: "#f9f4f4",
  borderRadius: "16px",
  padding: "32px",
});

const StyledBanner = styled(Grid)({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#A9C9FF",
  backgroundImage:
    "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
  padding: "200px",
});

const StyledHeader = styled(Typography)({
  fontWeight: "bold",
  color: "#f9f4f4",
});

const StyledLargeButton = styled(Button)({
  borderRadius: "14px",
  padding: "16px 24px",
  fontStyle: "none",
  border: "2px #f9f4f4 solid",
  color: "#f9f4f4",
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",
});

const StyledButton = styled(Button)({
  borderRadius: "8px",
  padding: "8px 16px",
  fontWeight: "bold",
  textTransform: "none",
});

const StyledImageContainer = styled(Grid)({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "#f9f4f4",
  padding: ".25rem",
  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
});

const StyledProfileDetails = styled(Grid)({
  backgroundImage:
    "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
  borderRadius: "8px",
  padding: "64px 16px 16px 16px",
  display: "flex",
  color: "#f9f4f4",
});

function Homepage() {
  const [userList, setUserList] = useState<UserList[]>([]);
  const user: UserList = getUserData();

  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  function generateUser() {
    getUserList().then((res) => {
      setOpen(true);
      localStorage.setItem("userData", JSON.stringify(res));
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
    setOpen(false);
  }

  return (
    <>
      <StyledBanner>
        <StyledHeader variant="h2">Looking for professionals?</StyledHeader>
        <StyledHeader variant="h4">Let us Help You!</StyledHeader>
        <Grid m={6}>
          <StyledLargeButton variant="outlined" onClick={generateUser}>
            Find the one!
          </StyledLargeButton>
        </Grid>
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

      <Modal open={open} onClose={handleClose}>
        <StyledModal container>
          <StyledModalContainer container item xs={6}>
            <Grid container>
              <Grid item xs={5}>
                <Grid
                  container
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Grid sx={{ marginBottom: "-25%", zIndex: "900" }}>
                    <StyledImageContainer>
                      <img src={user.image} />
                    </StyledImageContainer>
                  </Grid>
                  <StyledProfileDetails container>
                    <Grid container gap={0.5} my={1}>
                      <Grid item xs={12}>
                        <Typography variant="caption" fontWeight={"bold"}>
                          Name
                        </Typography>
                        <Typography variant="body2">{user.name}</Typography>
                      </Grid>

                      <Grid item xs={5}>
                        <Typography variant="caption" fontWeight={"bold"}>
                          Gender
                        </Typography>
                        <Typography variant="body2">{user.gender}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container gap={0.5} my={1}>
                      <Grid item xs={12}>
                        <Typography variant="caption" fontWeight={"bold"}>
                          Email
                        </Typography>
                        <Typography variant="body2">{user.email}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="caption" fontWeight={"bold"}>
                          Mobile Number
                        </Typography>
                        <Typography variant="body2">{user.cell}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="caption" fontWeight={"bold"}>
                          Phone Number
                        </Typography>
                        <Typography variant="body2">{user.phone}</Typography>
                      </Grid>
                    </Grid>
                  </StyledProfileDetails>
                </Grid>
              </Grid>
              <Grid
                item
                xs={7}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                }}
              >
                <Grid mb={1}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Introduction
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis facere porro aliquid quibusdam ea eos
                    exercitationem consequatur repudiandae. Nostrum
                    necessitatibus dolor nesciunt vel molestias perferendis
                    ullam dolores numquam voluptatem voluptate?
                  </Typography>
                </Grid>
                <Grid mb={1}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Skills
                  </Typography>
                  <Typography variant="body2">HTML</Typography>
                  <Typography variant="body2">CSS</Typography>
                  <Typography variant="body2">
                    Javascript / Typescript
                  </Typography>
                  <Typography variant="body2">Php</Typography>
                  <Typography variant="body2">ReactJs / ReactTs</Typography>
                  <Typography variant="body2">Laravel</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"flex-end"}
              my={3}
              gap={2}
            >
              <Grid>
                <StyledButton variant="outlined" onClick={handleClose}>
                  <Typography>Sorry, Not the one</Typography>
                </StyledButton>
              </Grid>
              <Grid>
                <StyledButton variant="contained" onClick={addUsertoList}>
                  I like this one!
                </StyledButton>
              </Grid>
            </Grid>
          </StyledModalContainer>
        </StyledModal>
      </Modal>
    </>
  );
}

export default Homepage;
