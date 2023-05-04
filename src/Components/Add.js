import { Modal, Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/action";
class Add extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
      newTodo: ""
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="heade">
        <h1>TO-DO APP!</h1>
          <h5>Add New To-Do </h5>
        <Button className="btnadd" type="primary" onClick={this.showModal}>
        ADD
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={() => {
            this.props.addNewTodo({
              id: Math.random(),
              title: this.state.newTodo,
              checked: false,
              edited: false
            });
            this.handleOk();
          }}
          onCancel={this.handleCancel}
        >
          <input
          value={this.state.newTodo}
            type="text"
            placeholder="todo..."
            onChange={e => {
              this.setState({ newTodo: e.target.value });
            }}
          />
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: payload => dispatch(addTodo(payload))
  };
};
export default connect(null, mapDispatchToProps)(Add);