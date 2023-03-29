import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function RightBar() {
  return (
    <Box marginTop={2}>
      <Typography>Latest Photos</Typography>
      <ImageList sx={{ width: 250, height: 250 }} cols={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img:"/assets/photo-1538220856186-0be0e085984d.jpg",
    title: "Breakfast",
  },
  {
    img: "/assets/Cheeseburger-3d7c922.jpg",
    title: "Burger",
  },
  {
    img: "/assets/e75ddbda351d44e24b6b8099fa200aad.jpg",
    title: "Camera",
  },
  {
    img: "/assets/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg",
    title: "Coffee",
  },
];