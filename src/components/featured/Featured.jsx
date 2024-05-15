import { endpoints } from "../../configs/APIs";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import React from "react";
const Featured = () => {
  const { data: tinhs, loading, error } = useFetch(endpoints['tinhs']);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="featured">
       {tinhs.map(c => (
        <>
            <div className="featuredItem" key={c.id}>
            <img
              src={c.anhtinh}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{c.tentinh}</h1>
              <h2>123 properties</h2>
            </div>
          </div>      
        </>       
       ))}                
        
      </div>
  );
};

export default Featured;
