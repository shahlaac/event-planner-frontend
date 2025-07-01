import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
  Button
} from '@mui/material';import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteeventAPI, getEventAPI } from '../service/allAPIs';
import Swal from 'sweetalert2'






function AllBookings() {

    const [events,setEvents] = useState([])
    //delete events
    const deleteEvent=async(id)=>{
       try{
         const result = await deleteeventAPI(id)
        console.log(result);
         Swal.fire({
          title: "Deleted!",
          text: "Event Deleted!",
          icon: "success"
        });
        handleGetEvents()
        
       }catch(err){
        console.log(err);
        
       }
    }
    
//get events
    const handleGetEvents=async()=>{
        const result =await getEventAPI()
        console.log(result.data);
        setEvents(result.data)
        
    }
    console.log(events);
    
    

    useEffect(()=>{
        handleGetEvents()
    },[])
    



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
    Booked Events
  </Typography>

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 1,
      mb: 1
    }}
  >
    
   
  </Box  >

  <div id="result">
   {
    events.length>0 ? events.map((item,index)=>(
         <Card
         key={index}
      elevation={4}
      sx={{
        mb: 3,
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
      }}
    >
        
      <CardContent>
         
        
        
        <Stack spacing={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography variant="h6" sx={{ color: 'red' }}>
      {item.title}
    </Typography>
    <Box>
      <Link to={`/edit/${item.id}`}>
        <Button color="error" size="small">
          <EditIcon fontSize="small" />
        </Button>
      </Link>
      <Button  onClick={()=>deleteEvent(item.id)} color="error">
        <DeleteIcon />
      </Button>
    </Box>
  </Box>

            
          
          

          <Divider />
          

          <Typography><strong>Date:</strong>{item.date} </Typography>
          <Typography><strong>Location:</strong>{item.location} </Typography>
          <Typography><strong>Type:</strong>{item.type} </Typography>

          
        </Stack>
      </CardContent>
    </Card>
    )) :"No Event Bookings"
   }
   
  </div>
  
</Box>
      
    </div>
  )
}

export default AllBookings
