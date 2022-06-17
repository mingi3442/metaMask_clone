import { KeyboardArrowDown, Check } from "@mui/icons-material";
import { Button, Divider, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";

const Cricle = styled.div`
  margin-right: ${(props) => (props.bottom ? "15px" : "5px")};
  margin-left: ${(props) => (props.top ? "15px" : "0px")};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#ced4da"};
`;

export default function NetworkMenu() {
  const netWorks = [
    {
      id: 0,
      name: "이더리움 메인넷",
      color: "#38d9a9",
    },
    {
      id: 1,
      name: "Matic Mainnet",
      color: "#ced4da",
    },
    {
      id: 2,
      name: "Klaytn Mainnet",
      color: "#ced4da",
    },
    {
      id: 3,
      name: "Ganache Network",
      color: "#ced4da",
    },
    {
      id: 4,
      name: "Ropsten 테스트 네트워크",
      color: "#e64980",
    },
    {
      id: 5,
      name: "Kovan 테스트 네트워크",
      color: "#7950f2",
    },
  ];
  const [selected, setSelected] = useState(netWorks[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const selectNetwork = (event) => {
    setSelected(netWorks[event.target.value]);
  };
  return (
    <>
      <Tooltip title="">
        <Button variant="outlined" onClick={handleClick} sx={{ p: 0, borderRadius: "20px", textTransform: "none", color: "#868e96", borderColor: "#868e96" }}>
          <Cricle top={true} color={selected.color === "#ced4da" ? "black" : selected.color} />
          <Typography sx={{ fontSize: "0.85em", margin: "0 5px" }}>{selected.name}</Typography>
          <KeyboardArrowDown sx={{ fontSize: "1.2em", mr: 1.5 }} />
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            minWidth: "18vw",
            mt: 0.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Box sx={{ textAlign: "center", margin: "20px 0" }}>네트워크</Box>
        <Divider />
        {netWorks.map((network, idx) => {
          return (
            <MenuItem value={network.id} key={idx} onClick={selectNetwork} sx={{ margin: "20px 25px 10px 5px" }}>
              <ListItemIcon>{idx === selected.id ? <Check sx={{ color: "#40c057" }} /> : null}</ListItemIcon>
              <Cricle bottom={true} color={network.color} />
              <Typography sx={{ fontSize: "0.9em", color: `${idx === selected.id ? "#212529" : "#495057"} ` }}>{network.name}</Typography>
            </MenuItem>
          );
        })}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outlined" sx={{ width: "90%", borderRadius: "25px", margin: "7px" }}>
            네트워크 추가
          </Button>
        </Box>
      </Menu>
    </>
  );
}
