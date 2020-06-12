import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ name, picture, rating }: any) => {
  return (<>
    <h1>I like { name }</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture}
      width="320" height="280"
      alt={name}
    />
  </>);
}

const foodList = [
  {
    id: 1,
    name: "김치",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "삼겹살",
    image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
    rating: 4.5,
  },
  {
    id: 3,
    name: "비빔밥",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg",
    rating: 1.3,
  },
  {
    id: 4,
    name: "돈까스",
    image: "https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
    rating: 2.8,
  },
  {
    id: 5,
    name: "김밥",
    image: "https://craftlog.com/m/i/5934748=s1280=h960",
    rating: 0.5,
  }
];

const App = () => {
  return (
    <div>
      {foodList.map((dish) => (
        <Food key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;
