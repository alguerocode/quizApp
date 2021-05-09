import React, { useEffect } from 'react';



const Home: React.FC = () => {
  useEffect(  ()=>{
    document.title = "Home | quiz app"
  },[])
  return <div className="home">welcome to the home page</div>;
};

export default Home;

