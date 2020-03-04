import React from "react";
import PropTypes from "prop-types";

const Card = ({cardData, number, onHover}) => {
  const parser = new DOMParser();
  const priceValue = parser.parseFromString(cardData.price.priceValue, `text/html`).body.textContent;
  const priceText = parser.parseFromString(cardData.price.priceText, `text/html`).body.textContent;

  return (<article className="cities__place-card place-card" onMouseOver={onHover} data-number={number}>
    {(cardData.mark) ?
      <div className="place-card__mark">
      <span>{cardData.mark}</span>
      </div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href={cardData.link}>
        {(cardData.img.imgAlt) ?
          <img className="place-card__image" src={`img/` + cardData.img.imgLink} width="260" height="200"
            alt={cardData.img.imgAlt}/>
          :
          <img className="place-card__image" src={`img/` + cardData.img.imgLink} width="260" height="200" />
        }
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{priceValue}</b>
          <span className="place-card__price-text">{priceText}</span>
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
          <span style={{width: (cardData.rating * 20) + `%`}}> </span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{cardData.title}</a>
      </h2>
      <p className="place-card__type">{cardData.type}</p>
    </div>
  </article>);
};

Card.propTypes = {
  cardData: PropTypes.objectOf({
    mark: PropTypes.string.isRequired,
    img: PropTypes.objectOf({
      imgLink: PropTypes.string.isRequired,
      imgAlt: PropTypes.string,
    }),
    link: PropTypes.string.isRequired,
    price: PropTypes.objectOf({
      priceValue: PropTypes.string.isRequired,
      priceText: PropTypes.string.isRequired,
    }),
    rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onHover: PropTypes.func,
  number: PropTypes.number
};

export default Card;
