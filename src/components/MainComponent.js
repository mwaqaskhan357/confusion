import React, { useEffect } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { set_dishes } from "../redux/actions/dishAction";

const Main = (props) => {
  useEffect(() => {
    props.set_dishes();
  }, []);

  const HomePage = () => {
    return (
      <Home
        dish={props.dishes?.filter((dish) => dish?.featured)[0]}
        dishLoading={props.dishesLoading}
        dishesError={props.dishesError}
        promotion={props.promotions?.filter((promo) => promo?.featured)[0]}
        leader={props.leaders.filter((leader) => leader?.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          props.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        isLoading={props.dishesLoading}
        dishError={props.dishesError}
        comments={props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/menu"
          component={() => <Menu dishes={props.dishes} />}
        />
        <Route exact path="/contactus" component={Contact} />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={props.leaders} />}
        />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Redirect path="/" />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.dishes,
    dishesLoading: state.dishes.isLoading,
    dishesError: state.dishes.errorMessage,
    comments: state.comments.comments,
    promotions: state.promotions.promotions,
    leaders: state.leaders.leaders,
  };
};

const mapDispatchToProps = {
  set_dishes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
