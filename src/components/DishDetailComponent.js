import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

  function RenderDish({dish}) {
    console.log(dish)
    if (dish != null) {
      return (
        <div>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </Card>
        </div>
      );
    } else {
      return <div></div>; 
    }
  }

  function RenderComments({dish}) {
    if (dish != null) {
      return dish.comments.map((com) => {
        return (
            <div key={com.id}>
            <ul className="list-unstyled">
              <li>{com.comment}</li>
              <li>
                -- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}
              </li>
            </ul><br/>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }

  const DishDetail = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish ={props.selectedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments dish={props.selectedDish} />
          </div>
        </div>
      </div>
    );  
  }

export default DishDetail;
