import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import {  TextField, MenuItem,  Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ViewBookings from './ViewBookings';
import { addEventAPI } from '../service/allAPIs';
import Swal from 'sweetalert2'



function BookEvent({formData, setFormData,setIsSubmitted}) {

  const handleAddEvent=async()=>{
    try{
      const result = await addEventAPI(formData)
      console.log(result);
      Swal.fire({
  title: "Good job!",
  text: "Event Booked Successfully!",
  icon: "success"
});
  setIsSubmitted(true)
5
      

    }catch(err){
      console.log("Error",err);
      
    }
  }

  

  console.log(formData);
  
  return (
    <div>
     
       <Box
      sx={{
        height: '50vh',
        backgroundImage: 'url(ruby.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
Reserve the moment. Relive the memories.      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
       Create lasting impressions with just a few clicks
      </Typography>
     
    </Box>


    <Box
  sx={{
    maxWidth: 500,
    margin: 'auto',
    p: 4,
    mt: 4,
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: '#f9f9f9',
  }}
>
  <Typography variant="h5" color='red' gutterBottom textAlign="center">
    Book Your Event
  </Typography>

  <form>
    <Stack spacing={3}>
      <TextField
      onChange={e=>setFormData({...formData,title:e.target.value})}
      value={formData.title}
        label="Event Title"
        name="title"
        required
        fullWidth
      />

      <TextField
            onChange={e=>setFormData({...formData,date:e.target.value})}
      value={formData.date}

        label="Date"
        type="date"
        name="date"
        required
        fullWidth
      />

      <TextField
            onChange={e=>setFormData({...formData,location:e.target.value})}
      value={formData.location}

        label="Location"
        name="location"
        required
        fullWidth
      />

     <TextField
            onChange={e=>setFormData({...formData,type:e.target.value})}
      value={formData.type}

        label="type"
        name="type"
        required
        fullWidth
      />
        
   

      <Link><Button onClick={handleAddEvent}  type="submit" variant="contained" sx={{backgroundColor:'rgb(201, 44, 70)'}} fullWidth>
        Submit Booking
      </Button></Link>
    </Stack>
  </form>
</Box>

    </div>
  )
}

export default BookEvent
