import React from "react";
import { connect } from "react-redux";
import { deleteTodo, checkTodo, toggleEdit, editTodo } from "../Actions/action";

class List extends React.Component {
  state = {
    editedTodo: ""
  };
  render() {
    return (
      <div>
        {this.props.todoList.map(e => (
          <div>
            <input 
              type="text"
              value={e.edited ? this.state.editedTodo : e.title}
              onChange={e => this.setState({ editedTodo: e.target.value })}
              style={
                e.checked
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              readOnly={!e.edited}
            />

            <button className="dlt"
              onClick={() => {
                this.props.deleteTodo(e.id);
              }}
            >
              Delete
            </button>
            <button
            className="comp"
              onClick={() => {
                this.props.toggleEdit(e.id);
                this.props.editTodo({
                  id: e.id,
                  newTitle: this.state.editedTodo
                });
                this.setState({ editedTodo: "" });
              }}
            >
              {e.edited ? "save" : "Edit"}
            </button>
            <button className="comp" onClick={() => this.props.completeTodo(e.id)}>
              {e.checked ? "undo" : "complete"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todoList: state.todoList };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: x => dispatch(deleteTodo(x)),
    completeTodo: x => dispatch(checkTodo(x)),
    toggleEdit: x => dispatch(toggleEdit(x)),
    editTodo: x => dispatch(editTodo(x))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);