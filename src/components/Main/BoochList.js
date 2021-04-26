import React from 'react';
import Booch from './Booch';
import PropTypes from 'prop-types';

export default function BoochList(props) {
  return (
    <>
      <hr/>
      {props.boochList.map((booch) => 
        <Booch 
          whenBoochClicked={props.onBoochSelection}
          name={booch.name}
          brand={booch.brand}
          price={booch.price}
          alcoholContent={booch.alcoholContent}
          flavorDescription={booch.flavorDescription}
          remainingPints={booch.remainingPints}
          id={booch.id}
          key={booch.id}
        />
      )}
    </>
  );
}

BoochList.propTypes = {
  boochList: PropTypes.array,
  onBoochSelection: PropTypes.func
};