import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "30px", xs: "0px" },
        }}
      >
        {exerciseVideos &&
          exerciseVideos.slice(0, 3).map((item, index) => {
            return (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                className="exercise-video"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box sx={{ cursor: "pointer" }}>
                  <Typography variant="h6" fontWeight={600} color="#000">
                    {item.video.title}
                  </Typography>
                  <Typography variant="body2" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            );
          })}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos;
