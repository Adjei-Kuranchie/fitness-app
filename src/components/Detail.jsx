import { Button, Stack, Typography } from "@mui/material";

import bodyPartImage from "../assets/icons/body-part.png";
import equipmentImage from "../assets/icons/equipment.png";
import targetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
  const { name, target, equipment, bodyPart, gifUrl } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];

  let newName = name ? name.charAt(0).toUpperCase() + name.slice(1) : name;
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image " />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{newName}</Typography>
        <Typography>
          Exercises keep you strong. {newName} bup is one of the best exercises
          to target your {target}.It will help you improve your mood and gain
          energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction="row "
            gap="24px"
            alignItems="center"
          >
            <Button
              sx={{
                background: "#ff2bd",
                borderRadius: "50%",
                width: "100px ",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt="icon"
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Detail;
