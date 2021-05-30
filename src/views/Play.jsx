import React from "react";
import { motion } from "framer-motion";
import Joi from "joi-browser";
import Form from "hoc/form";
import auth from "services/authService";
import Card from "components/card";

class Play extends Form {
  state = {
    data: { username: "", gameTypeId: "" },
    gameTypes: [
      { _id: "1", name: "Single" },
      { _id: "2", name: "Multiple" },
    ],
    errors: {},
  };

  schema = {
    username: Joi.string().min(10).max(50).required().label("Username"),
    gameTypeId: Joi.string().required().label("Game Type"),
  };

  doSubmit = () => {
    const { data } = this.state;
    auth.login(data.username, data.gameTypeId);

    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/in-play";
  };

  render() {
    return (
      <motion.div
        key="play"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <span className="block text-center text-size- animate-bounce">
            Are you ready to take up the challenge ?
          </span>
          <form onSubmit={this.handleSubmit}>
            <span className="block text-primary-500 my-28">
              {this.renderInput(
                "username",
                "Please enter a username",
                "fa fa-user"
              )}
            </span>
            <span className="block text-primary-500  my-18">
              {this.renderSelect(
                "gameTypeId",
                "Choose Game Type",
                this.state.gameTypes
              )}
            </span>
            <span className="block text-white-500 my-28">
              {this.renderButton("Click to Play!")}
            </span>
          </form>
        </Card>
      </motion.div>
    );
  }
}

export default Play;
