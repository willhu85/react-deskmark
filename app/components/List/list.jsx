import React, { PropTypes } from 'react';
import ListItem from './ListItem/listitem';

import './list.scss';

const propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function List({ items, onSelect }) {
  const itemContent = items.map(item => (
    <ListItem item={item} key={item.id} onClick={() => onSelect(item.id)} />
  ));
  return (
    <div className="list-wrap">
      {itemContent}
    </div>
  );
}

List.propTypes = propTypes;
export default List;
