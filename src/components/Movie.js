import React from "react";
// MUI components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Movie = ({ data }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.overview}
            </Typography>

            <div className="details">
              <Typography
                variant="body3"
                color="text.secondary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <VisibilityIcon />
                {data.vote_count}
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThumbUpIcon />
                {data.vote_average}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Movie;
