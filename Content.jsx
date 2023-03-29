import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Content() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={2}
    >
      <Grid item xs={6}>
        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Welcome to My Website
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porta euismod ex, sit amet accumsan elit volutpat et. Donec
            tincidunt justo velit, eu tincidunt lorem consequat in. Nulla
            commodo semper felis, eu ullamcorper nisl lacinia vel.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Sed rhoncus ipsum dolor, id pharetra velit aliquam nec. Morbi
            commodo eleifend mauris eget bibendum. Aenean et purus eget quam
            consequat vehicula non non tellus. Fusce commodo tortor ut erat
            blandit, vel tincidunt libero malesuada.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/istockphoto-1181563943-612x612.jpg"
                  alt="Random Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus porta euismod ex, sit amet accumsan elit volutpat
                    et. Donec tincidunt justo velit, eu tincidunt lorem
                    consequat in. Nulla commodo semper felis, eu ullamcorper
                    nisl lacinia vel.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/istockphoto-1181563943-612x612.jpg"
                  alt="Random Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus porta euismod ex, sit amet accumsan elit volutpat
                    et. Donec tincidunt justo velit, eu tincidunt lorem
                    consequat in. Nulla commodo semper felis, eu ullamcorper
                    nisl lacinia vel.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/istockphoto-1181563943-612x612.jpg"
                  alt="Random Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus porta euismod ex, sit amet accumsan elit volutpat
                    et. Donec tincidunt justo velit, eu tincidunt lorem
                    consequat in. Nulla commodo semper felis, eu ullamcorper
                    nisl lacinia vel.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}