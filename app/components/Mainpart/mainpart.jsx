import React, { PropTypes } from 'react';
import _ from 'lodash';
import Noitem from './noitem/noitem';
import ItemEditor from './ItemEditor/itemeditor';
import ItemShowLayer from './ItemShowLayer/itemshowlayer';

import './mainpart.scss';

const propTypes = {
  selectItem: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  cancelItem: PropTypes.func.isRequired,
};

function Mainpart({ selectItem, editing, editItem, deleteItem, saveItem, cancelItem }) {
  let content;
  if (editing) {
    content = (<ItemEditor
      onSave={saveItem}
      onCancel={cancelItem} item={selectItem}
    />);
  } else {
    content = (<ItemShowLayer
      onEdit={editItem}
      onDelete={deleteItem}
      item={selectItem}
    />);
  }
  if (_.isEmpty(selectItem) && !editing) {
    content = <Noitem />;
  } else if (_.isEmpty(selectItem) && editing) {
    content = (<ItemEditor
      onSave={saveItem}
      onCancel={cancelItem} item={selectItem}
    />);
  }
  return (
    <div className="main-part">
      {content}
    </div>
  );
}

Mainpart.propTypes = propTypes;
export default Mainpart;
