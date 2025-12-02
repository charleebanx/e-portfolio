import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function MyCard({ image, title, description, link }) {
  return (
    <Card
      variant="soft"
      sx={{
        width: 320,
        borderRadius: "lg",
        boxShadow: "0 4px 12px rgba(217, 70, 108, 0.2)", // soft rose shadow
        transition: "0.3s ease",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(217, 70, 108, 0.3)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Image */}
      <CardOverflow>
        <AspectRatio
          ratio="16/9"
          sx={{
            borderBottom: "1px solid var(--joy-palette-neutral-outlinedBorder)",
          }}
        >
          <img src={image} alt={title} style={{ objectFit: "cover" }} />
        </AspectRatio>
      </CardOverflow>

      {/* Text */}
      <CardContent sx={{ p: 2.5 }}>
        <Typography level="title-lg" sx={{ color: "#1e293b" }}>
          {title}
        </Typography>
        <Typography level="body-sm" sx={{ mt: 1, color: "#475569" }}>
          {description}
        </Typography>
      </CardContent>

      {/* Footer button */}
      {link && (
        <CardOverflow variant="soft" sx={{ bgcolor: "#f8fafc" }}>
          <Divider inset="context" />
          <CardContent sx={{ p: 2 }}>
            <Button
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              size="md"
              fullWidth
              sx={{
                bgcolor: "#d9466c",
                "&:hover": { bgcolor: "#b73354" },
                color: "#ffffff",
              }}
            >
              View Project
            </Button>
          </CardContent>
        </CardOverflow>
      )}
    </Card>
  );
}
