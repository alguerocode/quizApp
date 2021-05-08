import React, { useEffect } from 'react';


const Results: React.FC = () => {
  useEffect(  ()=>{
    document.title = "Results | quiz app"
  },[])
  return ( <div className="results">welcome to the results</div> );
}
 
export default Results;