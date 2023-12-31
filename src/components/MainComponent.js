import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/Dishes';
import { COMMENTS } from '../shared/Comments';
import { LEADERS } from '../shared/Leaders';
import { PROMOTIONS } from '../shared/Promotions';

import { Routes, Route, Navigate,useParams } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS,
        selectedDish: null
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}

          />
      );
    }

    const DishWithId = () => {
      var dishId =  useParams().dishId;
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
      );
    };
    
    return (
      <div>
        <Header>
        </Header>
          <Routes>
            <Route path="/home" element={<HomePage />}  />
            <Route path="/aboutus" element={<About leaders={this.state.leaders} />}  />
            <Route path='/menu' exact element={<Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishId' element={<DishWithId></DishWithId>} />
            <Route exact path='/contactus' element={<Contact></Contact>}></Route> 
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        <Footer/>
      </div>
    );
  }
}

export default Main;