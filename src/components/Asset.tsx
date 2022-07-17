import * as React from "react";
import { Box, Link, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material/";
import styled from "styled-components";
import MainBottom from "./MainBottom";
import { IUser } from "../stores/AccountStore";

interface IProps {
  state: IUser;
}

const Container = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
const Mark = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid #868e96;
  border-radius: 50%;
`;
const TopContents = styled.div`
  flex: 1;
`;

export default function Asset({ state }: IProps) {
  return (
    <Container>
      <TopContents>
        <List sx={{ width: "100%", pt: 0 }} component="nav">
          <ListItemButton sx={{ width: "100%", padding: "20px 0", borderTop: "1px solid  #e9ecef", borderBottom: "1px solid  #e9ecef" }}>
            <ListItemAvatar sx={{ ml: 2 }}>
              <Box>
                <Mark src="/ethereum.png" />
              </Box>
            </ListItemAvatar>
            <ListItemText primary={`${state.eth} ETH`} secondary="$0.00 USD" />
            <ListItemIcon sx={{ ml: 5 }}>
              <ArrowForwardIos />
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Box sx={{ margin: "10px auto" }}>
          <Typography sx={{ fontSize: "0.9em", color: "#868e96" }} align="center">
            토큰이 보이지 않나요?
          </Typography>
          <Typography align="center">
            <Link sx={{ fontSize: "0.9em", textDecoration: "none", cursor: "pointer" }}>새로 고침 목록 </Link>
            또는
            <Link sx={{ fontSize: "0.9em", textDecoration: "none", cursor: "pointer" }}>토큰 가져오기</Link>
          </Typography>
        </Box>
      </TopContents>
      <Box sx={{ margin: "0 auto" }}>
        <MainBottom />
      </Box>
    </Container>
  );
}
