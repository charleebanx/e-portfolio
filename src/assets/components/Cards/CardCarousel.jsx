// src/components/CardCarousel.jsx
import React, { useRef } from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import MyCard from "./MyCard";

export default function CardCarousel({ items = [], title = "Projects" }) {
  const scrollRef = useRef(null);
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <Sheet
      variant="soft"
      sx={{
        width: "100%",        
        boxShadow: "none",      
        p: { xs: 2, sm: 4 },    
        bgcolor: "background.surface",  
        overflow: "hidden",
        mb: 6,   
        pt: 24,               
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography level="h2" sx={{ fontWeight: "xl" }}>
          {title}
        </Typography>
        <Box>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => scroll(-350)}
            sx={{ mr: 1 }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => scroll(350)}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          py: 1,
          px: { xs: 1, sm: 2 },
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {items.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              minWidth: { xs: "90%", sm: "260px", md: "320px" },
            }}
          >
            <MyCard {...item} />
          </Box>
        ))}
      </Box>
    </Sheet>
  );
}
