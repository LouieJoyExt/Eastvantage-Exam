import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const StyledModal = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const StyledModalContainer = styled(Grid)({
  backgroundColor: "#f9f4f4",
  borderRadius: "16px",
  padding: "32px",
});

export const StyledBanner = styled(Grid)({
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

export const StyledHeader = styled(Typography)({
  fontWeight: "bold",
  color: "#f9f4f4",
});

export const StyledLargeButton = styled(Button)({
  borderRadius: "14px",
  padding: "16px 24px",
  fontStyle: "none",
  border: "2px #f9f4f4 solid",
  color: "#f9f4f4",
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",
});

export const StyledButton = styled(Button)({
  borderRadius: "8px",
  padding: "8px 16px",
  fontWeight: "bold",
  textTransform: "none",
});

export const StyledImageContainer = styled(Grid)({
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

export const StyledProfileDetails = styled(Grid)({
  backgroundImage:
    "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
  borderRadius: "8px",
  padding: "64px 16px 16px 16px",
  display: "flex",
  color: "#f9f4f4",
});
