import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Sources = (props) => {
  console.log(props);
  return (
    <div className="col m4">
      <h4>{props.title.name}</h4>
      <p>{props.title.description}</p>
      <Link class="btn btn-default" to="/">More Info</Link>
    </div>
  );
};
Sources.propTypes = {
  title: React.PropTypes.object.isRequired,
};

export default Sources;

