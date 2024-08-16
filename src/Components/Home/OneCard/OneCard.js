import React from 'react';
import"../OneCard/OneCard.css"
import { useLocation } from 'react-router-dom';

function OneCard() {
    let location=useLocation();
    let{data}=location.state||{};
    console.log(data)
  return (
    <div>OneCard</div>
  )
}

export default OneCard