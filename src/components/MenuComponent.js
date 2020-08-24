import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish : null
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  onRenderDish(dish) {
    if(dish!= null){
    return (  
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </Card>
    );
    }
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
            <div className="col-12 md-5 m-1">
                {this.onRenderDish(this.state.selectedDish)}
            </div>
        </div>
      </div>
    );
  }
}

export default Menu;
