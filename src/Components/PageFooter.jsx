import React from 'react'
import { Box, Typography, Divider, Stack } from '@mui/material';


function PageFooter() {
  return (
    <div>
       <Box
      component="footer"
      sx={{
        backgroundColor: 'rgb(201, 44, 70)',
        mt: 6,
        py: 4,
        px: 2,
        borderTop: '1px solid #ddd',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="body2" color='white' textAlign="center">
          Thank you for using our Event Booking System.
        </Typography>

        <Divider sx={{ width: '100px', backgroundColor: 'white' }} />

        <Typography variant="caption" color="white" textAlign="center">
          &copy; 2025 Velvet Vows. All rights reserved.
        </Typography>
      </Stack>
    </Box>
    </div>
  )
}

export default PageFooter
