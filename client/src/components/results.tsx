import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetch_results} from '../store/async-actions/results';
import {Result} from '../types/results-interface';
import '../styles/results.css';
import {delete_result} from '../store/async-actions/results';

const Results: React.FC = () => {
  document.title = 'results | quiz app';
  const dispatch = useDispatch();
  const results = useSelector((state: {results: Result[]}) =>state.results);
  useEffect(() => {
    dispatch(fetch_results())
  }, [dispatch]);
  const deleteHandler = (id:string) =>{
    if(window.confirm('do you want to delete this result')) {
      dispatch(delete_result(id));
    }
  }
  return (
    <div>
      {results.length === 0 && <h2>there are no results</h2>}
      {results &&
        results.map((result:any) => (
          <div className="result" key={result.createdAt}>
            <h3 className="title">{result.title}</h3>
            <h4>{result.description}</h4>
            <h4>Degree:{result.degree}</h4>
            <h4>sendTime:  {result.createdAt}</h4>
            <button onClick={deleteHandler.bind(null,result._id)} id="delete">delete</button>
          </div>
        ))}
    </div>
  );
};

export default Results;
