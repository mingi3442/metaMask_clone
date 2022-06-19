import { Button, Container, Link, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";
import ButtonElement from "../components/ButtonElement";
import SwapElement from "../components/SwapElement";
import { useQuery } from "react-query";
import { Info, ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
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
const slippage = "주문 시점과 확인 시점 사이에 가격이 변동되는 현상을 '슬리패지'라고 합니다. 슬리패지가 '최대 슬리패지' 설정을 초과하면 스왑이 자동으로 취소됩니다.";
const transaction = "Simulate transactions before submitting to decrease transaction costs and reduce failures.";

export default function Swap() {
  const { isLoading, data } = useQuery("coins", () => {
    return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) => res.json());
  });

  const [alignment, setAlignment] = useState("a");
  const [optionOpen, setOptionOpen] = useState(false);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Container sx={{ minWidth: "70%", mt: 2, display: "flex", justifyContent: "center" }}>
        {!isLoading && (
          <Box sx={{ minWidth: "40%", width: "18vw", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}>
            <TopContainer>
              <Box />
              <Typography sx={{ ml: 8, fontWeight: 600 }}>스왑</Typography>
              <Button size="small">취소</Button>
            </TopContainer>
            <SwapContainer>
              <SwapElement data={data.slice(0, 30)} />
              <Box sx={{ width: "75%", mt: 3, display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", fontSize: "0.85em", color: "#1c7ed6", fontWeight: 800, cursor: "pointer" }}
                  onClick={() => setOptionOpen(!optionOpen)}
                >
                  고급 옵션 {optionOpen ? <ArrowDropUp /> : <ArrowDropDown />}
                </Box>
              </Box>
              <Box sx={{ minWidth: "65%", height: "10vh", display: "flex", flexDirection: "column" }}>
                {optionOpen ? (
                  <>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Typography sx={{ fontSize: "0.8em", fontWeight: 800 }}>슬래피지 허용치</Typography>
                      <Tooltip
                        title={<Typography sx={{ color: "#495057", fontSize: "0.6em", m: 1 }}>{slippage}</Typography>}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              maxWidth: "10.3vw",
                              backgroundColor: "#FFF",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                            },
                          },
                        }}
                        placement="top"
                      >
                        <Info sx={{ fontSize: "0.8em", ml: 1 }} />
                      </Tooltip>
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
                    <Box sx={{ minWidth: "100%", mt: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "0.8em", fontWeight: 800 }}>Smart Transaction</Typography>
                      <Tooltip
                        title={<Typography sx={{ color: "#495057", fontSize: "0.6em", m: 0.5 }}>{transaction}</Typography>}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              maxWidth: "10vw",
                              backgroundColor: "#FFF",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                            },
                          },
                        }}
                        placement="top"
                      >
                        <Info sx={{ fontSize: "0.8em", mr: 4 }} />
                      </Tooltip>
                      <ButtonElement />
                    </Box>
                  </>
                ) : (
                  ""
                )}
              </Box>
              <Box sx={{ width: "75%", mt: 2, display: "flex", justifyContent: "center" }}>
                <Button sx={{ padding: " 1vh 7vw", backgroundColor: "#a5d8ff" }} disabled variant="outlined">
                  <Typography sx={{ color: "#fff", fontSize: "0.8em" }}>스왑 검토</Typography>
                </Button>
              </Box>
              <Box sx={{ width: "75%", mt: 4, mb: 3, display: "flex", justifyContent: "center" }}>
                <Link sx={{ fontSize: "0.7em", textDecoration: "none", cursor: "pointer" }} onClick={() => window.open("https://consensys.net/terms-of-use/")}>
                  서비스 약관
                </Link>
              </Box>
            </SwapContainer>
          </Box>
        )}
      </Container>
    </>
  );
}
