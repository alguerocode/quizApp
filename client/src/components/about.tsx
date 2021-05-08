import React, { useEffect } from 'react';
 
const About: React.FC = () => {
  useEffect(  ()=>{
    document.title = "About | quiz app"
  },[])
  return ( <div>welcome to the about page</div> );
}
 
export default About;