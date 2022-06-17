import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import MainBottom from "./MainBottom";

const Container = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
const TopContents = styled.div`
  flex: 1;
  margin-top: 25px;
`;

export default function Activity() {
  return (
    <Container>
      <TopContents>
        <Typography align="center" sx={{ color: "#ced4da" }}>
          거래가 없습니다.
        </Typography>
      </TopContents>
      <Box sx={{ margin: "0 auto" }}>
        <MainBottom />
      </Box>
    </Container>
  );
}
