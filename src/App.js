import { useState } from 'react';
import { ListData } from './ListData';
import { FormData } from './FormData';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Box, Divider, Stack, Typography } from '@mui/material';


function App() {
  const [goalsList, setGoalsList] = useState([])
    function updLi(goalObj){
      setGoalsList([...goalsList, goalObj])
    }
 return(
  <>
  <Box sx={{bgcolor:'#1b2129', mt:3, width:'97%', ml:2, borderRadius:2, height:'10vh' , p:1,pt:2,pl:5, color:'white', boxShadow:2}}>
    
  <Typography bold>Set Goals</Typography>
    <Divider sx={{bgcolor:'white'}}/>
  </Box>
  
  <Stack direction={'row'} spacing={1}>
  < FormData updateList={updLi}/>
  < ListData goalsList = {goalsList}/>
  </Stack>
  </>
 )
}

export default App;
