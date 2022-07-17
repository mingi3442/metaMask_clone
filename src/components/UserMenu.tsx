import * as React from "react";
import { useState } from "react";
import { QuestionAnswer, Download, Settings, Add, Usb, Check } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../reducers/accountReducer";
import indexStore from "../stores/IndexStore";
import AccountStore from "../stores/AccountStore";

function UserMenu() {
  const accounts = [
    {
      id: 0,
      name: "Account 1",
      profile:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGF0dGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      address: "0x8ec8AAC51ABcd6b208c2CFFBc05d2fc92b3CBEfD",
      eth: 0,
    },
    {
      id: 1,
      name: "Account 2",
      profile:
        "https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      address: "0x2A52EEF61cCC256d71998916cc65F2934dF2556C",
      eth: 0,
    },
    {
      id: 2,
      name: "Account 3",
      profile:
        "https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0dGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      address: "0x21Eb7A5aAC7d5a90D0dA120050Bb239658213fF1",
      eth: 0,
    },
  ];

  // const state = useSelector((state) => state.setAccount);
  const {
    AccountStore: { user: state },
  } = indexStore();
  // const dispatch = useDispatch();
  const [accountEl, setAccountEl] = useState(null);
  const open = Boolean(accountEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAccountEl(event.currentTarget);
  };
  const handleClose = () => {
    setAccountEl(null);
  };

  return (
    <>
      <Tooltip title="">
        <IconButton onClick={handleClick}>
          <Avatar sx={{ margin: -1.5, border: "2px solid #74c0fc" }} alt={state.name} src={state.profile} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={accountEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            minWidth: "17vw",
            mt: 0.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px 15px" }}>
          내 계정
          <Button size="small" variant="outlined" sx={{ borderRadius: "20px" }}>
            잠금
          </Button>
        </Box>
        <Divider />
        {accounts.map((account, idx) => {
          return (
            <MenuItem
              // onClick={() => dispatch(setUser(accounts[account.id]))}
              onClick={() => AccountStore.setUser(accounts[account.id])}
              value={account.id}
              key={idx}
            >
              <ListItemIcon>{state.id === account.id ? <Check fontSize="small" /> : null}</ListItemIcon>
              <Avatar alt={account.name} src={account.profile} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ mt: 2 }}>{account.name} </Typography>
                <Typography sx={{ mt: 0.5, ml: 0.5, fontWeight: 300, fontSize: "0.8em" }}>{account.eth} ETH</Typography>
              </Box>
              {state.id !== account.id ? <Chip sx={{ marginLeft: 7 }} size="small" label="가져옴" variant="outlined" /> : null}
            </MenuItem>
          );
        })}
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Add fontSize="small" />
          </ListItemIcon>
          계정 생성
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Download fontSize="small" />
          </ListItemIcon>
          계정 가져오기
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Usb fontSize="small" />
          </ListItemIcon>
          하드웨어 지갑 연결
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <QuestionAnswer fontSize="small" />
          </ListItemIcon>
          지원
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          설정
        </MenuItem>
      </Menu>
    </>
  );
}
export default UserMenu;
