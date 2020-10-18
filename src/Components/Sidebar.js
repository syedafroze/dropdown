import React, { Component } from "react";
import Mediator from "../content";

//import ReactDOM from 'react-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: ["--Select---"],
      validationError: "",
    };
  }

  hanldeOption = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      this.setState({
        selectedTeam: [...this.state.selectedTeam, e.target.value],
      });
    } else {
      let newArr = [...this.state.selectedTeam];
      let index = newArr.findIndex((i) => i == e.target.value);
      newArr.splice(index, 1);
      this.setState({
        selectedTeam: newArr,
      });
    }
  };
  componentDidMount() {
    let listID = ["list1", "list2", "list3"];

    listID.forEach((list) => {
      console.log(list);
      var checkList = document.getElementById(list);
      console.log(checkList);
      checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
        if (checkList.classList.contains("visible"))
          checkList.classList.remove("visible");
        else checkList.classList.add("visible");
      };
    });
  }
  render() {
    return (
      <div>
        <div id="list1" className="dropdown-check-list" tabindex="1">
          <span className="anchor">{this.state.selectedTeam}</span>

          <ul className="items">
            <li>
              <input
                type="checkbox"
                value="Apple"
                onClick={this.hanldeOption}
              />
              Apple
            </li>
            <li>
              <input
                type="checkbox"
                value="Orange"
                onClick={this.hanldeOption}
              />
              Orange
            </li>
            <li>
              <input
                type="checkbox"
                value="Grapes"
                onClick={this.hanldeOption}
              />
              Grapes
            </li>
            <li>
              <input
                type="checkbox"
                value="Berry"
                onClick={this.hanldeOption}
              />
              Berry
            </li>
            <li>
              <input
                type="checkbox"
                value="Mango"
                onClick={this.hanldeOption}
              />
              Mango
            </li>
            <li>
              <input
                type="checkbox"
                value="Banana"
                onClick={this.hanldeOption}
              />
              Banana
            </li>
            <li>
              <input
                type="checkbox"
                value="Tomato"
                onClick={this.hanldeOption}
              />
              Tomato
            </li>
          </ul>
        </div>

        <div id="list2" className="dropdown-check-list">
          <span className="anchor">{this.state.selectedTeam}</span>
          <ul className="items">
            <li>
              <input
                type="checkbox"
                value="Apple"
                onClick={this.hanldeOption}
              />
              Apple
            </li>
            <li>
              <input
                type="checkbox"
                value="Orange"
                onClick={this.hanldeOption}
              />
              Orange
            </li>
            <li>
              <input
                type="checkbox"
                value="Grapes"
                onClick={this.hanldeOption}
              />
              Grapes
            </li>
            <li>
              <input
                type="checkbox"
                value="Berry"
                onClick={this.hanldeOption}
              />
              Berry
            </li>
            <li>
              <input
                type="checkbox"
                value="Mango"
                onClick={this.hanldeOption}
              />
              Mango
            </li>
            <li>
              <input
                type="checkbox"
                value="Banana"
                onClick={this.hanldeOption}
              />
              Banana
            </li>
            <li>
              <input
                type="checkbox"
                value="Tomato"
                onClick={this.hanldeOption}
              />
              Tomato
            </li>
          </ul>
        </div>

        <div id="list3" className="dropdown-check-list">
          <span className="anchor">{this.state.selectedTeam}</span>
          <ul className="items">
            <li>
              <input
                type="checkbox"
                value="Apple"
                onClick={this.hanldeOption}
              />
              Apple
            </li>
            <li>
              <input
                type="checkbox"
                value="Orange"
                onClick={this.hanldeOption}
              />
              Orange
            </li>
            <li>
              <input
                type="checkbox"
                value="Grapes"
                onClick={this.hanldeOption}
              />
              Grapes
            </li>
            <li>
              <input
                type="checkbox"
                value="Berry"
                onClick={this.hanldeOption}
              />
              Berry
            </li>
            <li>
              <input
                type="checkbox"
                value="Mango"
                onClick={this.hanldeOption}
              />
              Mango
            </li>
            <li>
              <input
                type="checkbox"
                value="Banana"
                onClick={this.hanldeOption}
              />
              Banana
            </li>
            <li>
              <input
                type="checkbox"
                value="Tomato"
                onClick={this.hanldeOption}
              />
              Tomato
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
