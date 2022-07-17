import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components";
import UserMenu from "./UserMenu";
import NetworkMenu from "./NetworkMenu";
import { Link } from "react-router-dom";

const Logo = styled.img`
  display: block;
  max-width: 150px;
  max-height: 80px;
  width: auto;
  height: auto;
  padding: 10px 0;
`;

export default function Header() {
  return (
    <AppBar sx={{ backgroundColor: "rgba(0,0,0,0)", width: "100%", boxShadow: "none" }} position="static">
      <Container sx={{ minWidth: "65%" }}>
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <Logo src="/logo.png" />
          </Link>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignContent: "center",
              "& > :last-child": {
                ml: 3,
              },
            }}
          >
            <NetworkMenu />
            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
