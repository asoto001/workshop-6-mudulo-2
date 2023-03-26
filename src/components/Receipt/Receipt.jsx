import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './style.scss'

// Actions
const reset = () => ({
    type: "reset",
});

const Receipt = (props) => {
    const total = props.burgersArray.reduce((sum, price) => price + sum, 0);

    return (
        <section className="container receipt">
            {props.burgersArray.map((price, key) => (
                <h2 className="receipt-row" key={key}>{`Burger ${key + 1
                    } x $ ${price}`}</h2>
            ))}
            <h1>{`Total: $${total}`}</h1>
            <div className="receipt__btns-container">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="receipt__btns link">Return to builder</div>
                </Link>
                <div className="receipt__btns reset" onClick={props.reset}>
                    Reset
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    burgersArray: state,
});

export default connect(mapStateToProps, { reset })(Receipt);
