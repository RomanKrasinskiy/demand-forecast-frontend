import { Paper, InputBase, Button } from '@mui/material';

function SerchForm() {

  return (
    <>
      <Paper
        component="form"
        sx={{  
          display: 'flex', 
          alignItems: 'center', 
          width: '100', 
          borderRadius: '24px', 
          border: '1px solid rgba(167, 167, 167, 1)', 
          boxShadow: 'none', 
          marginBottom: '24px',}}
      >
        <InputBase
          sx={{ 
            ml: 2.5, 
            flex: 1, 
            fontSize: '20px',
            fontWeight: '400',
            fontFamily: 'HelveticaNeueCyr',
           }}
          placeholder="Поиск"
        // inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Button
          variant="contained"
          sx={{
            width: "160px",
            height: "60px",
            backgroundColor: 'rgba(0, 60, 150, 1)',
            fontSize: '20px',          
            borderRadius: "23px",
            color: "white",
            border: "1px solid rgba(0, 60, 150, 1)",
            boxShadow: 'none',
            textTransform: 'none',
          }}
        >
        Найти
        </Button>
      </Paper>
    </>
  )
}

export default SerchForm;