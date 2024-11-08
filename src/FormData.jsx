import { useState } from "react";
import Box from '@mui/material/Box';
import { Button, Divider, Stack, Typography } from "@mui/material";
import OpenInNew from '@mui/icons-material/OpenInNew';

export function FormData(props){

    const [input, setInput] = useState({goal:"", by:""})
    const inputChange = (e) =>{
      setInput({...input, [e.target.name]:e.target.value})
    }
  
    const goalList = (e) =>{
      e.preventDefault();
      props.updateList(input)
      setInput({goal:"",by:""})
    }
    
  
    return(
  
     <Box sx={{height:'80vh', display:'flex' , flex:1}}>
        <Stack direction={'column'}>
        <Box sx=
        {{bgcolor:'#1b2129',
         width:'525px',
         height:'60vh',
         p:4, 
         color:'white',
         borderRadius:2,
         boxShadow:5, 
         mt:2,
         ml:2

             }}>
            <Typography sx={{fontFamily:'roboto', fontSize:25}}>Set Goals</Typography>
            <Divider sx={{bgcolor:'gray', mb:3}}/>
      <form onSubmit={goalList} className="form">
        <label style={{marginBottom:'10px'}}>Goal</label>
        <input
        name='goal'
        placeholder='Enter your goal'
        type='text'
        value = {input.goal}
        onChange={inputChange}
        className="form-control"
        />
        <label style={{marginBottom:'10px', marginTop:10}}>Achieve by </label>
        <input
        name='by'
        placeholder='By .............'
        type='text'
        value = {input.by}
        onChange={inputChange}
        className="form-control"
        />
        <Button sx={{bgcolor:'#1b4dc2', mt:6 ,color:'white'}} type="submit">Submit Goal</Button>
      </form>
      </Box>
             <Box sx={{bgcolor:'#1b2129', mt:4, width:'97%', borderRadius:2, ml:2, height:'20vh', p:2, color:'white'}}>
             <Typography>Other simple react projects</Typography>
                <Divider sx={{bgcolor:'gray'}}/>
                <Button sx={{mt:1, color:'green'}} endIcon={<OpenInNew/>}> Projects</Button>
             </Box>
             </Stack>
      </Box>
    )
  }

 
  