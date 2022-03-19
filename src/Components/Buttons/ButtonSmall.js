import { Button } from '@mui/material'

const ButtonSmall = (props) => {
    const {text, clickHandler, active, id} = props
  return (
      <Button variant="contained" size="small" color={active?'primary':'light'} onClick={clickHandler} id={id} sx={{
          fontSize:8,
          fontFamily: 'Lato',
          fontWeight: 900,
          letterSpacing: 2,
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBotton: '2px',
          paddingTop: '2px',
          borderRadius: 1,
          width: 'auto',
          margin: 1
          
      }}>{text}</Button>
  )
  
}


export default ButtonSmall