import React from "react";
import TextField from "./components/TextField/index";
import DropDown from "./components/DropDown/index";

class Flexi extends React.Component {
  render() {
    const { config, onSubmit, onChange, data } = this.props;
    const { items } = config;

    // console.log(config);

    return (
      <div>
        <form>
          {items.map(item => {
            if (item.type == "TextField") {
              return (
                <TextField
                  label={item.label}
                  name={item.name}
                  onChange={onChange}
                />
              );
            }
            if (item.type == "DropDown") {
              // console.log(item);
              return (
                <DropDown
                  label={item.label}
                  name={item.name}
                  val={item.values}
                  onChange={onChange}
                />
              );
            }
          })}
          <input type="button" value="Submit" onClick={onSubmit} />
        </form>
      </div>
    );
  }
}

export default Flexi;
