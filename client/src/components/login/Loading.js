import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../../styles/landing/style.css";

function Loading() {
  return (
    <Box className="loading" sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
export default Loading;
