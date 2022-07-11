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
// animation effect
import { motion } from "framer-motion";

const Movie = ({ data }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
        }}
      >
        <CardActionArea>
          {data.backdrop_path ? (
            <CardMedia
              component="img"
              height="140"
              image={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt="green iguana"
              sx={{ height: "230px" }}
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="green iguana"
              sx={{ height: "230px" }}
            />
          )}
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
                <VisibilityIcon sx={{ fontSize: "20px", marginRight: "5px" }} />
                {data.vote_count.toLocaleString()}
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThumbUpIcon sx={{ fontSize: "20px", margin: "5px" }} />
                {data.vote_average}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default Movie;
