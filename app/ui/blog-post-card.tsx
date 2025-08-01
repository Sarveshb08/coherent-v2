'use client';

import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Box,
  ThemeProvider,
  createTheme 
} from '@mui/material';

// Create a custom theme to match the Figma design
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: '0.00937em',
    },
    caption: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.385,
      letterSpacing: '0.01231em',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '18px',
          letterSpacing: '0.01231em',
          borderRadius: '100px',
          padding: '4px',
          '& .MuiChip-label': {
            paddingLeft: '6px',
            paddingRight: '6px',
          },
        },
      },
    },
  },
});

interface BlogPostCardProps {
  author?: string;
  date?: string;
  title?: string;
  content?: string;
  tags?: string[];
}

export default function BlogPostCard({
  author = "John Doe",
  date = "4 Feb 2022",
  title = "New Blog on Fintech",
  content = "Payouts, Payment gateway, Platform, OpEx, Settlements, CPSS, Risk all part of collection and disbursal....",
  tags = ["Fintech", "Collections", "Disbursal"]
}: BlogPostCardProps) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: 476,
          height: 218,
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          border: 'none',
          borderRadius: 0,
        }}
      >
        <CardContent
          sx={{
            padding: '13px 16px',
            width: 400,
            '&:last-child': {
              paddingBottom: '13px',
            },
          }}
        >
          {/* Author and Date */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(0, 0, 0, 0.6)',
              marginBottom: '8px',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '0.00937em',
            }}
          >
            {author} • {date}
          </Typography>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(0, 0, 0, 0.87)',
              marginBottom: '8px',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.6,
              letterSpacing: '0.0075em',
            }}
          >
            {title}
          </Typography>

          {/* Content Preview */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(0, 0, 0, 0.6)',
              marginBottom: '16px',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '0.00937em',
            }}
          >
            {content}
          </Typography>

          {/* Tags/Chips */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
              width: '100%',
            }}
          >
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                variant="filled"
                size="medium"
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: 1.385,
                  letterSpacing: '0.01231em',
                  borderRadius: '100px',
                  height: 'auto',
                  '& .MuiChip-label': {
                    paddingLeft: '6px',
                    paddingRight: '6px',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                  },
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
