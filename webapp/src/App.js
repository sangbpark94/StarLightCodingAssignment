import React, { Component } from 'react';
import DataTable from './components/DataTable'
import fire from './fire'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      inputrows: [0,1,2],
      showResults: false,
      data: null,
      pageSize: null,
      displaytest: false
    }
  }

  addRows = (e) => {
    e.preventDefault()
    let inputrows = this.state.inputrows
    inputrows.push(0)
    inputrows.push(0)
    inputrows.push(0)
    this.setState({inputrows})
  }

  refreshPage = (e) => {
    e.preventDefault()
    window.location.reload(false);
  }

  showResults = (e) => {
    e.preventDefault()
    this.setState({showResults: false})
    console.log(this.state.showResults)
    let data = []
    let inputrows = this.state.inputrows
    for(let i = 0; i < inputrows.length; i++){
      let filledIn = true
      for(let j = 0; j < 6; j++)
        if(document.getElementById("first"+i).value === "" || document.getElementById("last"+i).value === "" ||
          document.getElementById("salary"+i).value === "" || document.getElementById("super"+i).value === "")
          filledIn = false
      if(filledIn){
        let obj = {first: document.getElementById("first"+i).value,
                   last: document.getElementById("last"+i).value,
                   salary: document.getElementById("salary"+i).value,
                   super: document.getElementById("super"+i).value,
                   start: document.getElementById("start"+i).value,
                   end: document.getElementById("end"+i).value }
        data.push(obj)
      }
    }
    console.log(data)
    let pageSize = data.length
    setTimeout(() => {this.setState({data, showResults: true, pageSize})}, 100)
  }

  renderInputRows = () => {
    return this.state.inputrows.map((obj, i) => (
        <div className="row-cont" id={"row"+i} key={i}>
          <input id={"first"+i} className="row-input" type="text" placeholder="First Name"/>
          <input id={"last"+i}className="row-input" type="text" placeholder="Last Name"/>
          <input id={"salary"+i}className="row-input" type="text" placeholder="Amount"/>
          <input id={"super"+i}className="row-input" type="number" min="0" max="12" placeholder="Rate"/>
          <input id={"start"+i}className="row-input-date" type="date" />
          <input id={"end"+i}className="row-input-date" type="date" />
        </div>
      )
    )
  }

  toggleDisplayTest = (e) => {
    let temp = this.state.displaytest
    if(temp === true)
      this.setState({inputrows: [0,0,0]})
    else if(temp === false){
      this.setState({inputrows: [0,0,0,0,0]})
    }
    this.setState({displaytest: !temp})
  }

  render() {
    return (
      <div className="App">
        <div className="in-cont">
          <div className="head-row">
            <div className="head-col">
              <p className="head-text">First Name</p>
            </div>
            <div className="head-col">
              <p className="head-text">Last Name</p>
            </div>
            <div className="head-col">
              <p className="head-text">Annual Salary</p>
            </div>
            <div className="head-col">
              <p className="head-text">Super Rate %</p>
            </div>
            <div className="head-col">
              <p className="head-text">Start Date</p>
            </div>
            <div className="head-col">
              <p className="head-text">End Date</p>
            </div>
          </div>
          {this.state.displaytest ?
            <div>
              <div className="row-cont" id={"row0"}>
                <input id={"first0"} className="row-input" type="text" placeholder="First Name" value="Andrew"/>
                <input id={"last0"}className="row-input" type="text" placeholder="Last Name" value="Smith"/>
                <input id={"salary0"}className="row-input" type="text" placeholder="Amount" value="60050"/>
                <input id={"super0"}className="row-input" type="number" min="0" max="12" placeholder="Rate" value="9"/>
                <input id={"start0"}className="row-input-date" type="date" value="2018-03-01"/>
                <input id={"end0"}className="row-input-date" type="date" value="2018-03-31"/>
              </div>
              <div className="row-cont" id={"row1"}>
                <input id={"first1"} className="row-input" type="text" placeholder="First Name" value="Claire"/>
                <input id={"last1"}className="row-input" type="text" placeholder="Last Name" value="Wong"/>
                <input id={"salary1"}className="row-input" type="text" placeholder="Amount" value="120000"/>
                <input id={"super1"}className="row-input" type="number" min="0" max="12" placeholder="Rate" value="10"/>
                <input id={"start1"}className="row-input-date" type="date" value="2018-03-01"/>
                <input id={"end1"}className="row-input-date" type="date" value="2018-03-31"/>
              </div>
              <div className="row-cont" id={"row2"}>
                <input id={"first2"} className="row-input" type="text" placeholder="First Name" value="Sang"/>
                <input id={"last2"}className="row-input" type="text" placeholder="Last Name" value="Park"/>
                <input id={"salary2"}className="row-input" type="text" placeholder="Amount" value="100000"/>
                <input id={"super2"}className="row-input" type="number" min="0" max="12" placeholder="Rate" value="8"/>
                <input id={"start2"}className="row-input-date" type="date" value="2018-04-01"/>
                <input id={"end2"}className="row-input-date" type="date" value="2018-04-30"/>
              </div>
              <div className="row-cont" id={"row3"}>
                <input id={"first3"} className="row-input" type="text" placeholder="First Name" value="George"/>
                <input id={"last3"}className="row-input" type="text" placeholder="Last Name" value="Washington"/>
                <input id={"salary3"}className="row-input" type="text" placeholder="Amount" value="175000"/>
                <input id={"super3"}className="row-input" type="number" min="0" max="12" placeholder="Rate" value="12"/>
                <input id={"start3"}className="row-input-date" type="date" value="2018-05-01"/>
                <input id={"end3"}className="row-input-date" type="date" value="2018-05-31"/>
              </div>
              <div className="row-cont" id={"row4"}>
                <input id={"first4"} className="row-input" type="text" placeholder="First Name" value="George"/>
                <input id={"last4"}className="row-input" type="text" placeholder="Last Name" value="Muller"/>
                <input id={"salary4"}className="row-input" type="text" placeholder="Amount" value="26240"/>
                <input id={"super4"}className="row-input" type="number" min="0" max="12" placeholder="Rate" value="5"/>
                <input id={"start4"}className="row-input-date" type="date" value="2018-05-01"/>
                <input id={"end4"}className="row-input-date" type="date" value="2018-05-31"/>
              </div>
            </div>
            : this.renderInputRows()}
          <div className="button-cont">
            <button className="button-add" onClick={(event) => {this.addRows(event)}}>Add Rows</button>
            <button className="button-submit" onClick={(event) => {this.showResults(event)}}>Submit</button>
            <button className="button-test" onClick={(event) => {this.toggleDisplayTest(event)}}>Toggle Test</button>
          </div>
        </div>
        {this.state.showResults ?
          <div className="out-cont">
            <DataTable data={this.state.data} pageSize={this.state.pageSize}/>
            <div className="button-cont">
              <button className="button-refresh" onClick={(event) => {this.refreshPage(event)}}>Refresh</button>
            </div>
          </div>
          : null}
      </div>
    );
  }
}

export default App;
