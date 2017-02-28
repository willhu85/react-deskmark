import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ListItem({ item, onClick }) {
  return (
    <a href="##" className="list-item" onClick={onClick}>
      <span className="list-item-time" id={item.id}>
        {item.time}
      </span>
      {item.title}
    </a>
  );
}

ListItem.propTypes = propTypes;
export default ListItem;
