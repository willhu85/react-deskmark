import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ItemShowLayer({ item, onEdit, onDelete }) {
  return (
    <div className="p10 tl">
      <h2>{item.title}</h2>
      <div className="f16">
        {item.content}
      </div>
      <div className="f12 g6 pt10">
        {item.time}
      </div>
      <div className="pt20">
        <button onClick={() => onEdit(item.id)} className="f12">编辑</button>
        <button onClick={() => onDelete(item.id)} className="f12">删除</button>
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = propTypes;
export default ItemShowLayer;
