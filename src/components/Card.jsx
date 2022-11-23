import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="img" src={props.img} alt="" />
      <div className="name">Наименование товара - {props.name}</div>
      <div className="price">Цена : {props.price} рублей</div>
      <div className="left">Осталось в наличии : {props.left} штук</div>
      <div className="id">Код товара : {props.id}</div>
    </div>
  );
};

export default Card;
