import { Box } from "@mantine/core";
import "./css/animated_background.css";

function AnimatedBackground() {
  return (
    <Box className="animated-bg-container">
      <div className="animated-blob blob-blue" />
      <div className="animated-blob blob-purple" />
      <div className="animated-blob blob-red" />
    </Box>
  );
}

export default AnimatedBackground;
