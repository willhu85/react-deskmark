import React, { PropTypes } from 'react';
import './createbar.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

function CreateBar({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>创建新文章</button>
  );
}

CreateBar.propTypes = propTypes;
export default CreateBar;
