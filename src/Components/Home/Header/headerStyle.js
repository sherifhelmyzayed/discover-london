  import bg from '../../../assets/headerHome.jpg'

 export const headerLayout = {
           background : `url(${bg})`,
           height : '100vh',    
           backgroundPosition: 'center',
           backgroundSize :'cover'    
        }

export const contantS = {
    height : '100%',
    width : "100%",
    textAlign : 'center',
    justifyContent: 'space-between' ,
    display : "flex",
    flexDirection: 'column',
}

export const sectionOne = {
    width : "100%",
    alignSelf : "center" ,
    display : "flex",
    flexDirection: 'column',
    color : 'white',
    fontWeight :600,
}

export const sectionTwo = {
    width : "100%",
    alignItems : "center" ,
    display : "flex",
    flexDirection: 'column',
    textAlign : 'center',
    justifyContent: 'space-between' ,
    color : 'white',
    fontWeight :600,
    background :""
}


export const H1 = {
    fontWeight :'800',
    marginTop : "100px",
    textShadow:  "-1px 11px 25px rgba(9,9,9,0.9)",
    textTransform: 'capitalize',
    fontSize : {  xs: "2rem",
                    sm : "2.5rem",
                    md: "3.3rem",
                    lg: "4rem",
                    xl: "4rem",}
}
export const H3 = {
    textTransform: 'capitalize',
    fontWeight :600,
    fontSize : { xs : ".9rem",
                sm : "1.1rem",
                md: "1.2rem",
                lg: "2rem",
                xl: "2.2rem",
}}

export const p = {
    color : 'white',
    textTransform: 'capitalize',
    fontSize : ".9rem",
}           

export const container = {
    maxWidth:{ 
                xs: 300,
                sm : 570,
                md: 850,
                lg: 1100,
                xl: 1436,
},
height :'100%'

}

export  const icon = {
    background : 'rgba(255, 255, 255, 0.2);',
    margin : "10px auto 30px",
    width : { 
        xs: 45,
        sm : 40,
        md: 50,
        lg: 60,
        xl: 70,
},
    height : { 
        xs: 45,
        sm : 40,
        md: 50,
        lg: 60,
        xl: 70,
},
}


