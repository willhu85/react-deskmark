import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

class ItemEditor extends React.Component {
  render() {
    const onSave = this.props.onSave;
    const onCancel = this.props.onCancel;
    const item = this.props.item || {
      title: '',
      content: '',
    };
    const btnText = item.id ? '保存' : '创建';
    const save = () => {
      onSave({
        ...item,
        title: this.title.value,
        content: this.content.value,
      });
    };
    return (
      <div className="p10 tl">
        <h2><input
          type="text"
          ref={(ipt) => { this.title = ipt; }}
          placeholder="请输入标题"
          defaultValue={item.title}
        />
        </h2>
        <div className="f16">
          <textarea
            name=""
            id=""
            ref={(textarea) => { this.content = textarea; }}
            placeholder="请填写内容"
            cols="30"
            rows="10"
            defaultValue={item.content}
          />
        </div>
        <div className="pt20">
          <button onClick={() => save()} className="f12">{btnText}</button>
          <button onClick={() => onCancel(item.id)} className="f12">取消</button>
        </div>
      </div>
    );
  }
}

ItemEditor.propTypes = propTypes;
export default ItemEditor;
