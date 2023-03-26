import React, { Component } from "react";
import Burger from "../burger/Burger";
import ControlPanel from "../ControlPanel/ControlPanel";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './style.scss'

// Actions
const confirmBurger = (price) => ({
    type: "addBurger",
    price,
});

/**
 * Ingredients: ["bacon", "salad", "cheese", "meat"]
 */

const prices = {
    bacon: 10,
    salad: 2,
    cheese: 5,
    meat: 20,
};

class Builder extends Component {
    state = {
        ingredients: [],
    };

    getPrice = () => {
        const pricesArray = this.state.ingredients.map((ingredient) => {
            return prices[ingredient];
        });
        const price = pricesArray.reduce((ant, act) => {
            return ant + act;
        }, 0);
        return price;
    };

    addIngredient = (idIngrediente) => {
        const newIngredients = this.state.ingredients.slice();
        newIngredients.push(idIngrediente);
        this.setState({ ingredients: newIngredients });
    };

    removeIngredient = (index) => {
        console.log(index);
        const newIngredients = this.state.ingredients.slice();
        newIngredients.splice(index, 1);
        this.setState({ ingredients: newIngredients });
    };

    handleConfirm = () => {
        this.props.confirmBurger(this.getPrice());
        this.setState({ ingredients: [] });
    };

    render() {
        return (
            <section className="container">

                <h3># Burgers added: {this.props.burgersArray.length}</h3>
                <h2>
                    Burger {this.props.burgersArray.length + 1} : ${" "}
                    {this.getPrice()}
                </h2>

                <div className="container__btns">
                    <ControlPanel
                        onAdd={(x) => {
                            this.addIngredient(x);
                        }}
                    />
                </div>
                
                <div className="builder">
                    <Burger
                        ingredients={this.state.ingredients}
                        onIngredientClick={(index) =>
                            this.removeIngredient(index)
                        }
                    />
                </div>

                <section className="container__comfirm-btn">
                    <div className="button" onClick={() => this.handleConfirm()}>
                        Confirm
                    </div>
                    <Link to="/receipt" style={{ textDecoration: 'none' }}>
                        <div className="button">See receipt</div>
                    </Link>
                </section>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    burgersArray: state,
});

export default connect(mapStateToProps, { confirmBurger })(Builder);
