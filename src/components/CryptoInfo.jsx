import React from "react";
import { useParams } from "react-router-dom";

const CryptoInfo = ({props}) => {
  const {id} =useParams();
  return (
    <div className="appBody">    
    <h1>id : {id}</h1>
    </div>
  );
};

export default CryptoInfo;
