import { Box, Button, Divider, Typography } from "@mui/material";
import {Delete} from '@mui/icons-material';


export function ListData(props){

    
       let listsize = props.goalsList.length;
   

    
    return(
      <>
      <Box sx={{ flex:1.5, height:'80vh'}}>
      <Box sx={{bgcolor:'#1b2129', height:'79vh', mt:2, mr:2, color:'white', p:3, borderRadius:1 , overflow:'auto', boxShadow:2}}>
      <Typography sx={{fontFamily:'roboto', fontSize:25}}>Goals List</Typography>
      <Divider sx={{bgcolor:'gray', mb:3}}/>

       <>
      { (listsize >= 1) ? <Button endIcon={<Delete/>} sx={{bgcolor:'#992929', color:'white', mb:4}} onClick={() => window.location.reload()}>Clear List</Button> : <Typography sx={{color:'#6e6d6a'}}>List is Currently Empty</Typography>
}</>
    
      <ol>
      {props.goalsList.map((rr, i)=>(
        <li key={i}>{rr.goal} achieved by {rr.by}
        <Divider sx={{bgcolor:'black', mb:2, mt:1}}/>
        </li>
        
      ))
      }
      </ol>
      </Box>



      </Box>
      </>
    )
  }

  