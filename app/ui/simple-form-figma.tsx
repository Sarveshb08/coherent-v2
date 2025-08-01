'use client';

import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  ThemeProvider, 
  createTheme 
} from '@mui/material';

// Create a custom theme to match the Figma design
const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F', // Error red color from Figma
    },
    error: {
      main: '#D32F2F',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
            '& fieldset': {
              borderColor: '#D32F2F',
            },
            '&:hover fieldset': {
              borderColor: '#D32F2F',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D32F2F',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#D32F2F',
            fontSize: '12px',
            fontWeight: 400,
            '&.Mui-focused': {
              color: '#D32F2F',
            },
          },
          '& .MuiOutlinedInput-input': {
            fontSize: '16px',
            fontWeight: 400,
            padding: '8px 12px',
            color: 'rgba(0, 0, 0, 0.87)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '0.02857em',
          padding: '6px 16px',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          '&:hover': {
            backgroundColor: '#C62828',
            boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
  },
});

export default function SimpleFormFigma() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Basic validation
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
    };
    
    setErrors(newErrors);
    
    if (!newErrors.name && !newErrors.email) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Form submitted successfully!');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 244,
          height: 299,
          backgroundColor: '#FFFFFF',
          padding: '42px 12px 12px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '35px', // Space between fields (119px - 42px - field height)
          position: 'relative',
        }}
      >
        {/* Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          value={formData.name}
          onChange={handleInputChange('name')}
          error={errors.name}
          sx={{
            width: 220,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#D32F2F',
              },
            },
          }}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={errors.email}
          sx={{
            width: 220,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#D32F2F',
              },
            },
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            width: 106,
            backgroundColor: '#C62828',
            alignSelf: 'center',
            marginTop: '52px', // Position button at 213px from top
            '&:hover': {
              backgroundColor: '#C62828',
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
}
