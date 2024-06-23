import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h4" mb="5px">
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb="5px">
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {equipmentExercises ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
export default SimilarExercises;
