import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getAnEventAPI, updateEventAPI } from '../service/allAPIs';
import { useParams } from 'react-router-dom';



function Editevent() {

  const { id } = useParams();//to get the id
  const [eventDetails,setEventDetails] = useState({})
  //get a particular event

  const getAnEvent=async(id)=>{
    const result = await getAnEventAPI(id)
    console.log(result);
    setEventDetails(result.data)
    
    
    

  }

  useEffect(()=>{getAnEvent(id)},[])

  //edit
  const updateEvent =async()=>{
    const result = await updateEventAPI(id,eventDetails)
  }

  

  return (
    <div>
        <Box
  sx={{
    maxWidth: 500,
    mx: 'auto',
    mt: 6,
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: '#fefefe',
  }}
>
  <Typography variant="h5" gutterBottom textAlign="center" color="error">
    Edit Event
  </Typography>

  <form>
    <Stack spacing={3}>
      <TextField
        label="Event Title"
        onChange={e=>setEventDetails({...eventDetails,title:e.target.value})}
        name="title"
value={eventDetails.title}
        required
        fullWidth
      />

      <TextField
        label="Date"

        type="date"
        name="date"
        onChange={e=>setEventDetails({...eventDetails,date:e.target.value})}
        value={eventDetails.date}
        required
        fullWidth
      />

      <TextField
        label="Location"
        name="location"
        onChange={e=>setEventDetails({...eventDetails,location:e.target.value})}
        value={eventDetails.location}
        required
        fullWidth
      />

      <TextField label="Event Type" name="type" onChange={e=>setEventDetails({...eventDetails,type:e.target.value})} value={eventDetails.type} required fullWidth>
        
      </TextField>

      <Link to={'/allbookings'}>
      <Button onClick={updateEvent}  type="submit" variant="contained" color="error" fullWidth>
        Save Changes
      </Button></Link>
    </Stack>
  </form>
</Box>

      
    </div>
  )
}

export default Editevent
