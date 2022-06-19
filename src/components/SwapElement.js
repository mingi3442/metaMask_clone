import { Autocomplete, Avatar, IconButton, Link, MenuItem, TextField, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Info, SwapVert } from "@mui/icons-material";

const toSwapInfo = "여러 토큰이 같은 이름과 기호를 사용할 수 있습니다. Etherscan에서 원하는 토큰인지 확인하세요.";

export default function SwapElement({ data }) {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const transferClick = () => {
    const value = fromValue;
    setFromValue(toValue);
    setToValue(value);
  };
  return (
    <>
      <Box sx={{ width: "75%", mt: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <Typography sx={{ fontWeight: 600 }}>다음에서 스왑</Typography>
          <Typography sx={{ fontSize: "0.65em", color: "#1c7ed6", cursor: "pointer" }}>최대</Typography>
        </Box>
        <Box sx={{ minWidth: "100%", display: "flex", alignItems: "flex-end", mt: 1.5 }}>
          <Autocomplete
            value={fromValue}
            onChange={(event, newValue) => {
              setFromValue(newValue.symbol);
            }}
            disableClearable
            sx={{ minwidth: "25vw" }}
            options={data}
            getOptionLabel={(option) => {
              if (option.symbol) return option.symbol;
              return option;
            }}
            renderOption={(props, option) => (
              <MenuItem sx={{ p: 1 }} component="li" {...props}>
                <Avatar sizes="small" alt={option.name} src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${option.name.toLowerCase()}.png`} />
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
          <TextField placeholder="0" />
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
          <SwapVert onClick={transferClick} />
        </IconButton>
      </Box>
      <Box sx={{ width: "75%", mt: 1 }}>
        <Typography sx={{ fontWeight: 600 }}>다음으로 스왑</Typography>
        <Autocomplete
          value={toValue}
          onChange={(event, newValue) => {
            setToValue(newValue.symbol);
          }}
          disableClearable
          sx={{ minwidth: "25vw", mt: 1.5 }}
          options={data}
          getOptionLabel={(option) => {
            if (option.symbol) return option.symbol;
            return option;
          }}
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
        <Box sx={{ m: 1 }}>
          {toValue !== "" ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography align="left" sx={{ fontSize: "0.7em" }}>
                항상{" "}
                <Link sx={{ textDecoration: "none" }} onClick={() => window.open("https://etherscan.io/")}>
                  Etherscan
                </Link>
                에서 토큰 주소를 확인하세요.
              </Typography>
              <Tooltip
                title={<Typography sx={{ color: "#495057", fontSize: "0.6em", m: 0.5 }}>{toSwapInfo}</Typography>}
                componentsProps={{
                  tooltip: {
                    sx: {
                      maxWidth: "10vw",
                      backgroundColor: "#FFF",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                      transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                      alignItems: "center",
                    },
                  },
                }}
                placement="top"
              >
                <Info sx={{ fontSize: "0.8em", m: "0 1" }} />
              </Tooltip>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
}
