import { Button, IconButton, Tab, Tooltip, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import AccountMenu from "../components/AccountMenu";
import { Download, CallMade, SwapHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Asset from "../components/Asset";
import Activity from "../components/Activity";

const InfoContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
`;
const MainContainer = styled.div`
  margin-top: 2px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Mark = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid #868e96;
  border-radius: 50%;
`;

const BtnContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.3em;
  text-decoration: none;
`;

export default function Main() {
  const state = useSelector((state) => state.setAccount);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTooltipClose = () => {
    setClicked(false);
  };

  const handleTooltipOpen = () => {
    setClicked(true);
  };

  return (
    <Container sx={{ minWidth: "65%", mt: 1 }}>
      <InfoContainer>
        <Box />
        <CopyToClipboard text={state.address}>
          <Tooltip onClose={handleTooltipClose} onClick={handleTooltipOpen} title={clicked ? "복사완료!" : "클립보드에 복사"}>
            <Button sx={{ ml: 5, display: "flex", flexDirection: "column", padding: "0 8vw" }}>
              <Typography sx={{ color: "black", fontSize: "1.2em", margin: "2px 0", textTransform: "none" }}>{state.name}</Typography>
              <Typography sx={{ fontSize: "0.8em", fontWeight: 200, color: "#868e96" }}>
                {state.address.slice(0, 5) + "..." + state.address.slice(-4)} <ContentCopyIcon sx={{ fontSize: "0.8em", color: "black" }} />
              </Typography>
            </Button>
          </Tooltip>
        </CopyToClipboard>
        <Box>
          <AccountMenu />
        </Box>
      </InfoContainer>
      <MainContainer>
        <Box sx={{ mt: 2 }}>
          <Mark src="/ethereum.png" />
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Typography align="center" sx={{ color: "black", fontSize: "1.85em" }}>
            {state.eth} ETH
          </Typography>
          <Typography align="center" sx={{ fontSize: "1em", fontWeight: 300, color: "#868e96" }}>
            $0.00 USD
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <BtnContainer to="/">
            <IconButton
              sx={{
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
              size="small"
            >
              <Download />
            </IconButton>
            <Typography sx={{ color: "#1976d2", fontSize: "0.75em", mt: 1 }}>구매</Typography>
          </BtnContainer>
          <BtnContainer to="/">
            <IconButton
              sx={{
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
              size="small"
            >
              <CallMade />
            </IconButton>
            <Typography sx={{ color: "#1976d2", fontSize: "0.75em", mt: 1 }}>보내기</Typography>
          </BtnContainer>
          <BtnContainer to="/swap">
            <IconButton
              sx={{
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
              size="small"
            >
              <SwapHoriz />
            </IconButton>
            <Typography sx={{ color: "#1976d2", fontSize: "0.75em", mt: 1, textDecoration: "none" }}>스왑</Typography>
          </BtnContainer>
        </Box>
      </MainContainer>
      <TabContext value={value}>
        <Box sx={{ width: "100%", borderColor: "divider" }}>
          <TabList sx={{ backgroundColor: "#FFF", borderBottom: "1px solid #ced4da", mb: 0, pb: 0 }} onChange={handleChange}>
            <Tab sx={{ maxWidth: "50vw", width: "50%", mb: 0 }} label="자산" value="1" />
            <Tab sx={{ maxWidth: "50vw", width: "50%", mb: 0 }} label="활동" value="2" />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: "0" }} value="1">
          <Asset state={state} />
        </TabPanel>
        <TabPanel sx={{ padding: "0" }} value="2">
          <Activity />
        </TabPanel>
      </TabContext>
    </Container>
  );
}
