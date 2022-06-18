import { Avatar, Box, MenuItem, MenuList, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
export default function CoinMenuItem({ data }) {
  const [currency, setCurrency] = useState("EUR");
  console.log(data);
  //   const { isLoading, data } = useQuery("allCoins", () => {
  //     return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) => res.json());
  //   });
  const handleChange = (event) => {
    console.log(data);
    setCurrency(event.target.value);
  };
  return (
    <TextField id="outlined-select-currency" sx={{ width: "20vw" }} select value={currency} onChange={handleChange}>
      {/* {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))} */}
      <MenuList sx={{ maxHeight: "20vh" }}>
        {data.slice(0, 50).map((coin, idx) => {
          return (
            <MenuItem value={idx} key={idx}>
              <Avatar alt={coin.name} src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${coin.name.toLowerCase()}.png`} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ mt: 2 }}>{coin.symbol} </Typography>
                <Typography sx={{ mt: 0.5, ml: 0.5, fontWeight: 300, fontSize: "0.8em" }}>{coin.name}</Typography>
              </Box>
            </MenuItem>
          );
        })}
      </MenuList>
    </TextField>
  );
}
