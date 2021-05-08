import React, { useEffect } from 'react';
 
const Quiz: React.FC = () => {
  useEffect(  ()=>{
    document.title = "Quiz | quiz app"
  },[])
  return ( 
    <div>i am in the quiz page</div>
   );
}
 
export default Quiz;