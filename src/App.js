import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
    .get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({todos: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <Card className="text-white bg-dark mb-3" style={{maxWidth:'18rem'}} key={item.id}>
          <CardHeader >{item.title}</CardHeader>
          <CardBody>
            <CardText>{item.body}</CardText>
          </CardBody>
        </Card>
        ))}
      </div>
    );
  }
}

export default App;
