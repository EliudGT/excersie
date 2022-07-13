import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@material-ui/core";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  console.log(item)

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
    >
      
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
