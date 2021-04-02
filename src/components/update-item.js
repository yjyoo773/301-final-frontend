import React from "react";
import Button from "react-bootstrap/Button";

class UpdateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const item = this.state.item;
    item[field] = value;
    this.setState(item);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.item);
  };

  render() {
    return (
      <form
        data-testid={`update-form-${this.props.item.name}`}
        onSubmit={this.handleSubmit}
      >
        <input
          data-testid={`update-field-${this.props.item.name}`}
          name="notes"
          placeholder="Add Notes"
          onChange={this.handleChange}
        />
        <Button
          variant="secondary"
          style={{ marginLeft: "1rem" }}
          type="submit"
        >
          Update Item
        </Button>
      </form>
    );
  }
}

export default UpdateItemForm;
