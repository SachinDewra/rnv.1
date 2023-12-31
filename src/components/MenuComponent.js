import React from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from "reactstrap";
import Dishdetails from "./DishdetailComponent";
import Main from "./MainComponent";
import { Link } from "react-router-dom";   
//Functional Component array function
function RenderMenuItem({ dish }) {
    return(
        <Card key={dish.id} >
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
        </Card>
    );
}
//Functional Component array function
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} ></RenderMenuItem>
            </div>
        )
    })
    

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to={'/home'}></Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>

                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>   
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default Menu;