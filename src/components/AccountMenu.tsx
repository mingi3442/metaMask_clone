import * as React from "react";
import { IconButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { OpenInNew, Delete, DashboardCustomize, ModeStandby } from "@mui/icons-material";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton aria-label="more" aria-controls={open ? "long-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: "14vw",
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem sx={{ mb: 1 }}>
          <ListItemIcon>
            <OpenInNew fontSize="small" />
          </ListItemIcon>
          <Typography sx={{ color: "black", fontSize: "0.85em" }}>Etherscan에서 계정 보기</Typography>
        </MenuItem>
        <MenuItem sx={{ mb: 1 }}>
          <ListItemIcon>
            <DashboardCustomize fontSize="small" />
          </ListItemIcon>
          <Typography sx={{ color: "black", fontSize: "0.85em" }}>계정 세부 정보</Typography>
        </MenuItem>
        <MenuItem sx={{ mb: 1 }}>
          <ListItemIcon>
            <ModeStandby fontSize="small" />
          </ListItemIcon>
          <Typography sx={{ color: "black", fontSize: "0.85em" }}>연결된 사이트</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <Typography sx={{ color: "black", fontSize: "0.85em" }}>계정 제거</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
