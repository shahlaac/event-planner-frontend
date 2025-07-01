import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { MdDownload } from "react-icons/md";

import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import {jsPDF} from 'jspdf'
import html2canvas from 'html2canvas'




function ViewBookings({formData,setFormData,IsSubmitted}) {
  console.log(formData);

  const downloadPDF=async()=>{
    const input = document.getElementById('result')
    const canvas = await html2canvas(input,{scale:2})
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p','mm','a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height*pdfWidth)/canvas.width
    pdf.addImage(imgData,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('eventSchedule.pdf')
   
  }
  
  return (
    <div>
   <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, px: 2 }}>

 
  <Typography
    variant="h4"
    sx={{
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'error.main',
      position: 'relative',
      mb: 4,
      '&::after': {
        content: '""',
        display: 'block',
        width: '80px',
        height: '4px',
        backgroundColor: 'error.main',
        margin: '8px auto 0',
        borderRadius: '2px'
      }
    }}
  >
    Booked Event
  </Typography>

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 1,
      mb: 1
    }}
  >
    <Button onClick={downloadPDF} color="error">
      <MdDownload />
    </Button>
   
   
  </Box>

  <div id="result">
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ color: 'red' }}>
            {formData.title}
          </Typography>

          <Divider />

          <Typography><strong>Date:</strong> {formData.date}</Typography>
          <Typography><strong>Location:</strong> {formData.location}</Typography>
          <Typography><strong>Type:</strong> {formData.type}</Typography>


                   

          
        </Stack>
      </CardContent>
    </Card>

     <Typography sx={{mt:3,color:"red"}}><strong>Your Event Is Scheduled To : {formData.date}</strong> </Typography>

   
  </div>
  
</Box>


    
    </div>
  )
}

export default ViewBookings
