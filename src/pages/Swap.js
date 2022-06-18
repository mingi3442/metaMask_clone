import { Autocomplete, Avatar, Button, Container, IconButton, Link, MenuItem, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
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
  const { isLoading, data } = useQuery("allCoins", () => {
    return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) => res.json());
  });
  const [alignment, setAlignment] = useState("a");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [optionOpen, setOptionOpen] = useState(false);
  const [value, setValue] = useState("");
  const transferClick = () => {
    const value = fromValue;
    setFromValue(toValue);
    setToValue(value);
  };
  return (
    <Container sx={{ minWidth: "80vw", mt: 2, display: "flex", justifyContent: "center" }}>
      {isLoading ? (
        ""
      ) : (
        <Box sx={{ minWidth: "28vw", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}>
          <TopContainer>
            <Box />
            <Typography sx={{ ml: 6 }}>스왑</Typography>
            <Button size="small">취소</Button>
          </TopContainer>
          <SwapContainer>
            <Box sx={{ width: "75%", mt: 5 }}>
              <Typography sx={{ fontWeight: 600 }}>다음에서 스왑</Typography>
              <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", mt: 1.5 }}>
                <Autocomplete
                  value={fromValue.symbol}
                  onChange={(event, newValue) => {
                    setFromValue(newValue.symbol);
                  }}
                  id="country-select-demo"
                  sx={{ minwidth: "25vw" }}
                  options={data.slice(0, 30)}
                  getOptionLabel={(option) => option.symbol}
                  renderOption={(props, option) => (
                    <MenuItem component="li" {...props}>
                      <Avatar alt={option.name} src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${option.name.toLowerCase()}.png`} />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ mt: 2 }}>{option.symbol} </Typography>
                        <Typography sx={{ mt: 0.5, ml: 0.5, fontWeight: 300, fontSize: "0.8em" }}>{option.name}</Typography>
                      </Box>
                    </MenuItem>
                  )}
                  renderInput={(params) => (
                    <TextField
                      sx={{ minWidth: "10vw" }}
                      placeholder="선택"
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                      }}
                    ></TextField>
                  )}
                />
                <TextField placeholder="0" id="input-with-sx" />
              </Box>
              {fromValue !== "" ? (
                <Typography align="left" sx={{ fontSize: "0.7em" }}>
                  0 {fromValue} 스왑 가능
                </Typography>
              ) : (
                ""
              )}
            </Box>
            <Box sx={{ width: "75%", display: "flex", justifyContent: "flex-end" }}>
              <IconButton sx={{ mt: 2.5 }}>
                <SwapVertIcon onClick={transferClick} />
              </IconButton>
            </Box>
            <Box sx={{ width: "75%", mt: 1.5 }}>
              <Typography sx={{ fontWeight: 600 }}>다음으로 스왑</Typography>
              <Autocomplete
                value={toValue.symbol}
                onChange={(event, newValue) => {
                  setToValue(newValue.symbol);
                }}
                id="country-select-demo"
                sx={{ minwidth: "25vw", mt: 1.5 }}
                options={data.slice(0, 30)}
                getOptionLabel={(option) => option.symbol}
                renderOption={(props, option) => (
                  <MenuItem component="li" {...props}>
                    <Avatar alt={option.name} src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${option.name.toLowerCase()}.png`} />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ mt: 2 }}>{option.symbol} </Typography>
                      <Typography sx={{ mt: 0.5, ml: 0.5, fontWeight: 300, fontSize: "0.8em" }}>{option.name}</Typography>
                    </Box>
                  </MenuItem>
                )}
                renderInput={(params) => (
                  <TextField
                    sx={{ minWidth: "10vw" }}
                    placeholder="토큰 검색"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                    }}
                  ></TextField>
                )}
              />
            </Box>
            <Box sx={{ width: "75%", mt: 3, display: "flex", justifyContent: "center" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", fontSize: "0.7em", color: "#1c7ed6", fontWeight: 600, cursor: "pointer" }}
                onClick={() => setOptionOpen(!optionOpen)}
              >
                고급 옵션 {optionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </Box>
            </Box>
            <Box sx={{ width: "55%", height: "10vh", display: "flex", flexDirection: "column" }}>
              {optionOpen ? (
                <>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography sx={{ fontSize: "0.7em", fontWeight: 800 }}>슬래피지 허용치</Typography>
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
                        m: 0,
                      }}
                      size="small"
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                    >
                      <ToggleButton sx={{ m: 0, padding: "0 5px" }} value="a">
                        2%
                      </ToggleButton>
                      <ToggleButton sx={{ m: 0, padding: "0 5px" }} value="b">
                        3%
                      </ToggleButton>
                      <ToggleButton sx={{ m: 0, padding: "0 5px" }} value="c">
                        맞춤형
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontSize: "0.7em", fontWeight: 800 }}>Smart Transaction</Typography>
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
      )}
    </Container>
  );
}
