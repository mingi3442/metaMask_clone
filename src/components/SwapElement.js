import { Autocomplete, Avatar, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useQuery } from "react-query";

import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function SwapElement() {
  const { isLoading, data } = useQuery("allCoins", () => {
    return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) => res.json());
  });
  const [fromValue, setFromValue] = useState({});
  const [toValue, setToValue] = useState({});

  const transferClick = () => {
    const value = fromValue;
    setFromValue({ ...toValue });
    setToValue({ ...value });
  };
  return (
    <>
      {!isLoading && (
        <>
          <Box sx={{ width: "75%", mt: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <Typography sx={{ fontWeight: 600 }}>다음에서 스왑</Typography>
              <Typography sx={{ fontSize: "0.65em", color: "#1c7ed6", cursor: "pointer" }}>최대</Typography>
            </Box>
            <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", mt: 1.5 }}>
              <Autocomplete
                Freesolo
                value={fromValue.symbol}
                onChange={(event, newValue) => {
                  setFromValue(newValue);
                }}
                disableClearable
                sx={{ minwidth: "25vw" }}
                options={data.slice(0, 30)}
                getOptionLabel={(option) => option.symbol}
                renderOption={(props, option) => (
                  <MenuItem component="li" {...props}>
                    <Avatar alt={option.name} src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${option.name.toLowerCase()}.png`} />
                    <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
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
                  />
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
          <Box sx={{ width: "75%", mt: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>다음으로 스왑</Typography>
            <Autocomplete
              Freesolo
              value={toValue.symbol}
              onChange={(event, newValue) => {
                setToValue(newValue);
              }}
              disableClearable
              sx={{ minwidth: "25vw", mt: 1.5 }}
              options={data.slice(0, 30)}
              getOptionLabel={(option) => option.symbol}
              renderOption={(props, option) => (
                <MenuItem component="li" {...props}>
                  <Avatar alt={option.name} src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${option.name.toLowerCase()}.png`} />
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
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
                />
              )}
            />
          </Box>
        </>
      )}
    </>
  );
}
