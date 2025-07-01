import React, { useState } from 'react'
import BookEvent from '../Components/BookEvent'
import ViewBookings from '../Components/ViewBookings'
import Header from '../Components/Header'
import { Box} from '@mui/material';



function EventPlan() {
      const [eventId,setEventId] = useState('')

    const [formData,setFormData] = useState({
    title : '',
    date : '',
    location : '',
    type :''
  })
  const [isSubmitted,setIsSubmitted] = useState(false)
  return (
    <div>
      
       <Box>
        {
        isSubmitted ? <div> 
        <ViewBookings formData={formData} setFormData={setFormData}/>
        </div>
        :
       
      
       <div><BookEvent formData={formData} setFormData={setFormData} setIsSubmitted = {setIsSubmitted}/>
       </div>
       }
       </Box>
    </div>
  )
}

export default EventPlan
