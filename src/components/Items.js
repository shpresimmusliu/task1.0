import React from "react";
import './styles/Item.css';
import {DataItem} from './Data.js';
const Items = () => {
  return (
      <div className="container">
          {DataItem.map((props) => {
              return(
                <div className="Items">
                <div className="icon">
                    {props.icon}
                </div>
                <div className="content">
                    <div className="title">
                    <h3>{props.title}</h3>
                    </div>
                    <div className="desc">
                    {props.desc}
                    </div>
                </div>
                </div>
              )
          })}
              
    </div>
    
  );
};

export default Items;
