import React, { Component } from "react";
//import ReactDOM from 'react-dom';
class Sidebar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: this.props.prop2,
      selectedTeam: "",
      validationError: "",
    };
  }

  render() {
    return (
      <div>
        <select
          className="select1"
          value={this.state.selectedTeam}
          onChange={(e) =>
            this.setState({
              selectedTeam: e.target.value,
              validationError:
                e.target.value === ""
                  ? "You must select your favourite team"
                  : "",
            })
          }
        >
          {this.props.prop2.map((team) => (
            <option key={team.id} value={team.access}>
              {team.access}
            </option>
          ))}
        </select>
        {console.log(this.state.selectedTeam)}
        <div style={{ color: "red", marginTop: "5px" }}>
          {this.state.validationError}
        </div>
      </div>
    );
  }
}

export default Sidebar1;
