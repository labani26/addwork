import React from 'react';

const Footer = () => {
    let footer = {
        bottom:"0px",
        // position: "-webkit-sticky",
        position: "sticky"
    }
    
    return (
        <footer className='text-light py-3 my-3' style={footer} >
            <p className="text-center mb-0">
                Copyright &copy; Addwork.com
            </p>
        </footer>
    );
}

export default Footer;
