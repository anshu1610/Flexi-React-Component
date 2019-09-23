import React from "react";
import Flexi from "./Flexi Component/index";

class Core extends React.Component {
  state = {
    formData: {}
  };

  flexiConfig = {
    items: [
      {
        name: "person_name",
        label: "Person's Name",
        type: "TextField"
      },
      {
        name: "email",
        label: "email",
        type: "TextField"
      },
      {
        name: "states",
        label: "Person's State",
        type: "DropDown",
        values: ["Maharashtra", "Kerela", "Tamil Nadu"]
      }
    ]
  };
  onFlexiSubmit = e => {
    console.log(this.state.formData);
    // e.preventDefault();
  };
  handleChange = (value, key) => {
    const { formData } = this.state;
    // let da = {
    //   person_name: "",
    //   states: ""
    // };
    this.setState({
      ...this.state,
      formData: { ...formData, [key]: value }
    });
  };

  render() {
    const { flexiConfig, onFlexiSubmit, handleChange } = this;
    return (
      <div>
        <Flexi
          onSubmit={onFlexiSubmit}
          config={flexiConfig}
          onChange={handleChange}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Core;
