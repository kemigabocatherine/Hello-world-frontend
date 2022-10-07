import React from 'react';
import PropTypes from 'prop-types';

function Greetings(props) {
  return (
    <div>
      {props.greetings.map((greeting) => (
        <div key={greeting.id}>
          <p>{greeting.message}</p>
        </div>
      ))}
    </div>
  );
}

Greetings.propTypes = {
  greetings: PropTypes.string.isRequired,
};

export default Greetings;
