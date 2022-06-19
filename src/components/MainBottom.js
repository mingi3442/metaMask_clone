import { Link, Typography } from "@mui/material";

export default function MainBottom() {
  return (
    <Typography sx={{ mb: 2 }}>
      도움이 필요하신가요?{" "}
      <Link sx={{ textDecoration: "none", cursor: "pointer" }} onClick={() => window.open("https://metamask.zendesk.com/hc/en-us")}>
        MetaMask 지원
      </Link>
      에 문의하세요.
    </Typography>
  );
}
