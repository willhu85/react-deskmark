import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar/createbar';
import Mainpart from '../Mainpart/mainpart';
import List from '../List/list';

import './deskmark.scss';

export default class Deskmark extends React.Component {
  constructor(props) {
    super(props);
    const items = [
      {
        id: '1',
        title: 'title1',
        content: 'this is tit1 content',
        time: '2012-11-11',
      },
      {
        id: '2',
        title: 'title2',
        content: 'this is tit2 content',
        time: '2012-11-11',
      },
      {
        id: '3',
        title: 'title3',
        content: 'this is tit3 content',
        time: '2012-11-11',
      },
    ];
    this.state = {
      items,
      selectId: null,
      editing: false,
    };
    this.createItem = this.createItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.cancelItem = this.cancelItem.bind(this);
  }
  createItem() {
    this.setState({
      selectId: null,
      editing: true,
    });
  }
  selectItem(id) {
    if (id === this.state.selectId) {
      return;
    }
    this.setState({
      selectId: id,
      editing: false,
    });
  }
  editItem(id) {
    this.setState({
      selectId: id,
      editing: true,
    });
  }
  deleteItem(id) {
    if (!id) {
      return;
    }
    this.setState({
      items: this.state.items.filter(result => result.id !== id),
      editing: false,
    });
  }
  saveItem(item) {
    let items = this.state.items;
    if (!item.id) {
      items = [
        ...items,
        {
          ...item,
          id: uuid.v4(),
          time: new Date().getTime(),
        },
      ];
    } else {
      items = items.map(
        exist => (
          exist.id === item.id ? { ...exist, ...item } : exist
        ),
      );
    }
    this.setState({
      items,
      selectId: item.id,
      editing: false,
    });
  }
  cancelItem(id) {
    this.setState({
      selectedId: id,
      editing: false,
    });
  }
  render() {
    const items = this.state.items;
    const selectId = this.state.selectId;
    const editing = this.state.editing;
    const selectItem = (selectId && items.find(item => item.id === selectId)) || {};
    return (
      <section>
        <div className="w700 auto">
          <div className="fix">
            <div className="l pct30">
              <CreateBar onClick={this.createItem} />
              <List items={items} onSelect={this.selectItem} />
            </div>
            <div className="cell pl10">
              <Mainpart
                selectItem={selectItem}
                editing={editing}
                editItem={this.editItem}
                deleteItem={this.deleteItem}
                saveItem={this.saveItem}
                cancelItem={this.cancelItem}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
