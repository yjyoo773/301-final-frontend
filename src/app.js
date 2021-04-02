import React from "react";

import axios from "axios";
import Form from "./components/add-item.js";
import Items from "./components/items.js";

import Container from "react-bootstrap/Container";

import bgImg from "./img/background.jpeg";

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = async (item) => {
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems();
  };

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  };

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item._id}`, item);

    this.getItems();
  };

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({ items });
  };

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    var divStyle = {
      backgroundImage: `url(${bgImg})`,
      height: "auto",
      minHeight: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: "auto",
      color:"white"
    };
    return (
      <div style={divStyle}>
        <Container className="align-middle p-0">
          <div>
            <h1>Our Items</h1>
            <Form handleAddItem={this.addItem} />
            <hr />
            <Items
              handleDelete={this.deleteItem}
              itemsList={this.state.items}
              handleUpdate = {this.updateItem}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
