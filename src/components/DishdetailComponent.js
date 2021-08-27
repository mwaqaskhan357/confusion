import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

const DishDetail = (props) => {
  const renderComments = (comments) => {
    return (
      <div className="col-12 col-md-5 pb-2">
        {comments?.length > 0 && (
          <>
            <h1> Comments</h1>
            {comments?.map((comment) => {
              return (
                <ul style={{ listStyle: "none" }}>
                  <li>{comment.comment}</li>
                  <li>
                    --{comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </li>
                </ul>
              );
            })}
            <CommentForm />
          </>
        )}
      </div>
    );
  };

  const { dish, comments } = props;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      {dish && (
        <div className="row m-1">
          <div className="col-12 col-md-5 pb-2">
            <Card>
              <CardImg top src={dish?.image} alt={dish?.name} />
              <CardBody>
                <CardTitle>{dish?.name}</CardTitle>
                <CardText>{dish?.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {renderComments(comments)}
        </div>
      )}
    </div>
  );
};

export default DishDetail;
