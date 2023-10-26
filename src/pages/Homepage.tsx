import { useState } from "react";

import { UserList } from "./types";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CommonModal from "../components/common-modal/CommonModal";

import {
  StyledBanner,
  StyledButton,
  StyledHeader,
  StyledImageContainer,
  StyledLargeButton,
  StyledProfileDetails,
} from "./styled-component/HomePageStyles";

import { getUserList } from "../api/apis";

import { getUserData } from "./utils";

function Homepage() {
  const [userList, setUserList] = useState<UserList[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const user: UserList = getUserData();

  const handleClose = () => setOpenModal(false);

  function generateUser() {
    getUserList().then((res) => {
      setOpenModal(true);
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
    setOpenModal(false);
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

      <CommonModal open={openModal} onClose={handleClose}>
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
                Reiciendis facere porro aliquid quibusdam ea eos exercitationem
                consequatur repudiandae. Nostrum necessitatibus dolor nesciunt
                vel molestias perferendis ullam dolores numquam voluptatem
                voluptate?
              </Typography>
            </Grid>
            <Grid mb={1}>
              <Typography variant="h6" fontWeight={"bold"}>
                Skills
              </Typography>
              <Typography variant="body2">HTML</Typography>
              <Typography variant="body2">CSS</Typography>
              <Typography variant="body2">Javascript / Typescript</Typography>
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
      </CommonModal>
    </>
  );
}

export default Homepage;
