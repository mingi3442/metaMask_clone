import { Button, Container, Link, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ButtonElement from "../components/ButtonElement";
import SwapElement from "../components/SwapElement";
const TopContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
`;

const SwapContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Swap() {
  const [alignment, setAlignment] = useState("a");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [optionOpen, setOptionOpen] = useState(false);

  return (
    <Container sx={{ minWidth: "80vw", mt: 2, display: "flex", justifyContent: "center" }}>
      <Box sx={{ minWidth: "25vw", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}>
        <TopContainer>
          <Box />
          <Typography sx={{ ml: 8, fontWeight: 600 }}>스왑</Typography>
          <Button size="small">취소</Button>
        </TopContainer>
        <SwapContainer>
          <SwapElement />
          <Box sx={{ width: "75%", mt: 3, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", fontSize: "0.85em", color: "#1c7ed6", fontWeight: 800, cursor: "pointer" }}
              onClick={() => setOptionOpen(!optionOpen)}
            >
              고급 옵션 {optionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Box>
          </Box>
          <Box sx={{ width: "55%", height: "10vh", display: "flex", flexDirection: "column" }}>
            {optionOpen ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Typography sx={{ fontSize: "0.8em", fontWeight: 800 }}>슬래피지 허용치</Typography>
                  <ToggleButtonGroup
                    sx={{
                      "& .MuiToggleButtonGroup-grouped": {
                        margin: 0.5,
                        border: 0,
                        "&.Mui-disabled": {
                          border: 1,
                        },
                        "&:not(:first-of-type)": {
                          borderRadius: 1,
                        },
                        "&:first-of-type": {
                          borderRadius: 1,
                        },
                      },
                      p: 0,
                      ml: 3,
                    }}
                    size="small"
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                  >
                    <ToggleButton sx={{ padding: "0 5px" }} value="a">
                      2%
                    </ToggleButton>
                    <ToggleButton sx={{ padding: "0 5px" }} value="b">
                      3%
                    </ToggleButton>
                    <ToggleButton sx={{ padding: "0 5px" }} value="c">
                      맞춤형
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Box sx={{ width: "90%", mt: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "0.8em", fontWeight: 800 }}>Smart Transaction</Typography>

                  <ButtonElement />
                </Box>
              </>
            ) : (
              ""
            )}
          </Box>
          <Box sx={{ width: "75%", mt: 3, display: "flex", justifyContent: "center" }}>
            <Button sx={{ padding: " 0.5vh 7vw", backgroundColor: "#a5d8ff" }} disabled variant="outlined">
              <Typography sx={{ color: "#fff", fontSize: "0.8em" }}>스왑 검토</Typography>
            </Button>
          </Box>
          <Box sx={{ width: "75%", mt: 3, mb: 2, display: "flex", justifyContent: "center" }}>
            <Link sx={{ fontSize: "0.7em", textDecoration: "none" }} onClick={() => window.open("https://consensys.net/terms-of-use/")}>
              서비스 약관
            </Link>
          </Box>
        </SwapContainer>
      </Box>
    </Container>
  );
}
