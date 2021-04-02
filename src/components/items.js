import React from "react";

import UpdateForm from "./update-item";
import Button from "react-bootstrap/Button";

class Items extends React.Component {
  render() {

    return (
      <section>
        <h2>Items...</h2>
        {this.props.itemsList.map((item, idx) => (
          <div key={idx}>
            <h3>Name: {item.name}</h3>
            <p>Description: {item.description}</p>
            <blockquote>Notes: {item.notes}</blockquote>
            <UpdateForm item={item} handleUpdate={this.props.handleUpdate} />
            <Button
              variant="secondary"
              style={{ marginTop: "2rem" }}
              data-testid={`delete-button-${item.name}`}
              onClick={() => this.props.handleDelete(item._id)}
            >
              Delete Item
            </Button>
          </div>
        ))}
      </section>
    );
  }
}

export default Items;
