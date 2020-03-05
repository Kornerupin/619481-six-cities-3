import React from "react";
import PropTypes from "prop-types";
import card from "../../../propTypes/card";

const Card = ({offerData, onHover}) => {
  return (<article className="cities__place-card place-card" onMouseOver={onHover}>
    {
      offerData.mark ? (
        <div className="place-card__mark">
          <span>{offerData.mark}</span>
        </div>
      ) : null
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href={offerData.link}>
        <img className="place-card__image" src={`img/` + offerData.img.imgLink} width="260" height="200"
          alt={offerData.img.imgAlt}/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{offerData.price.priceValue}</b>
          <span className="place-card__price-text">{offerData.price.priceText}</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: (offerData.rating * 20) + `%`}}> </span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offerData.title}</a>
      </h2>
      <p className="place-card__type">{offerData.type}</p>
    </div>
  </article>);
};

Card.propTypes = {
  offerData: card,
  onHover: PropTypes.func,
  number: PropTypes.number
};

export default Card;
