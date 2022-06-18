import { Autocomplete, Avatar, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function SwapSelector() {
  const { isLoading, data } = useQuery("allCoins", () => {
    return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) => res.json());
  });
  const [fromValue, setFromValue] = useState({});
  return (
    <>
      {!isLoading && (
        <>
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
        </>
      )}
    </>
  );
}
