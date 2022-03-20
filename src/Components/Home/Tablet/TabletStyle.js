// import bg from '../../../assets/bgTab.jpg'
import lap from '../../../assets/tablet.png'

export const lapLayout = {
    // background : `url(${bg})`,
    height : '100vh',    
    backgroundPosition: 'center',
    backgroundSize :'cover'    
 }

 export const  img = {
             background : `url(${lap})`,
              height : {
                  xs : "40% ",
                  sm : "60%",},
              width : {
                    xs : "100% ",
                    sm : "40%",
                    lg :'50%'
                },
                alignSelf: "flex-end",
               justifySelf: "flex-end",
              backgroundPosition: 'center',
              backgroundSize :'contain ',
            
              backgroundRepeat: 'no-repeat'
              
 }

 export const dataS = {
            padding :{ sx : "10px 30px",},
            display : 'flex',
            justifyContent:  'space-around' ,
            flexDirection:"column ",
            height : {
                xs : "65% ",
                sm : "70%",
                lg : '80%'
                 
            },
            width : {
                  xs : "100% ",
                  sm : "60%",
                  lg : "50%"
                },
 }

 export const contantS = {
    height : '100%',
    width : "100%",
    alignItems : 'center',
    justifyContent:{
                xs : "space-evenly ",
                sm :  'space-between' ,},

    display : "flex",
    flexDirection: {
        xs : "column ",
        sm : "row",
    }
 }
export const H1 = {
    color : 'white',
    textTransform: 'capitalize',
    fontWeight : 800 ,
    lineHeight:  {
        xs :'1.5rem' ,
        sm : '1,7rem',
        lg : '2.2rem',
        xl : '3.5rem',
},
    fontSize : { xs : "1.1rem",
                sm : "1.5rem",
                md: "1.7rem",
                lg: "2rem",
                xl: "2.2rem",
}}

export const P = {
    color : 'white',
    lineHeight: {
               xm :'1.3rem' ,
               sm : '1.5rem',
               lg : '1.8rem',
               xl : '2.1rem',
    },
    letterSpacing: '.6px',   
    fontSize : { xs : ".9",
                sm : "1rem",
                md: "1.1rem",
                lg: "1.2rem",
                xl: "1.3rem",
}}

export const botton = {
     width : {
         xs :'50%',
         sm: "45%",
         md : "40%",
         lg : '35%',
         xl : "30%",
        },

     color : 'white',
     border : '3px  white solid',
 
     
}

