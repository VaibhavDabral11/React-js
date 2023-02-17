import React from 'react'
//import './footer.css' import exernal css  

const Footer = () => { 
    // let footerStyle={
    // "margin-top": "40 vh",
    //     top:"100vh",
    //     width: "100%"
    // }
    return (
         <footer className="bg-dark text-light py-3" /*style={footerStyle}*/>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
} 
export default Footer;