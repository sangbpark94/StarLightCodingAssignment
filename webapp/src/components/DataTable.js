import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import './DataTable.css'

class DataTable extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: null,
      columns: null,
      pageSize: null
    }
  }

  componentDidMount = () => {
    this.convertData()
    this.setState({loading: false})
  }

  convertData = () => {
    let data = []
    let propdata = this.props.data
    for(let i = 0; i < propdata.length; i++){
      let name = propdata[i].first + ' ' + propdata[i].last
      let payperiod = this.createPayPeriod(propdata[i].start, propdata[i].end)
      let grossincome = Math.round(parseInt(propdata[i].salary) / 12)
      let incometax = this.calcIncomeTax(parseInt(propdata[i].salary))
      let netincome = grossincome - incometax
      let superamount = Math.round((parseInt(propdata[i].super) / 100) * grossincome)
      let obj = {name, payperiod, grossincome, incometax, netincome, superamount}
      data.push(obj)
    }
    this.setState({data})
  }

  createPayPeriod = (start, end) => {
    let startmonth, endmonth
    if(start.slice(5,7) === '01')
      startmonth = 'Jan'
    else if(start.slice(5,7) === '02')
      startmonth = 'Feb'
    else if(start.slice(5,7) === '03')
      startmonth = 'March'
    else if(start.slice(5,7) === '04')
      startmonth = 'April'
    else if(start.slice(5,7) === '05')
      startmonth = 'May'
    else if(start.slice(5,7) === '06')
      startmonth = 'June'
    else if(start.slice(5,7) === '07')
      startmonth = 'July'
    else if(start.slice(5,7) === '08')
      startmonth = 'August'
    else if(start.slice(5,7) === '09')
      startmonth = 'Sept'
    else if(start.slice(5,7) === '10')
      startmonth = 'Oct'
    else if(start.slice(5,7) === '11')
      startmonth = 'Nov'
    else if(start.slice(5,7) === '12')
      startmonth = 'Dec'
    if(end.slice(5,7) === '01')
      endmonth = 'Jan'
    else if(end.slice(5,7) === '02')
      endmonth = 'Feb'
    else if(end.slice(5,7) === '03')
      endmonth = 'March'
    else if(end.slice(5,7) === '04')
      endmonth = 'April'
    else if(end.slice(5,7) === '05')
      endmonth = 'May'
    else if(end.slice(5,7) === '06')
      endmonth = 'June'
    else if(end.slice(5,7) === '07')
      endmonth = 'July'
    else if(end.slice(5,7) === '08')
      endmonth = 'August'
    else if(end.slice(5,7) === '09')
      endmonth = 'Sept'
    else if(end.slice(5,7) === '10')
      endmonth = 'Oct'
    else if(end.slice(5,7) === '11')
      endmonth = 'Nov'
    else if(end.slice(5,7) === '12')
      endmonth = 'Dec'
    let returnstr = start.slice(8) + ' ' + startmonth + ' - ' + end.slice(8) + ' ' + endmonth
    return returnstr
  }

  calcIncomeTax = (salary) => {
    if(salary <= 18200)
      return 0
    else if(salary <= 37000){
      return Math.round((salary - 18200) * 0.19)
    }
    else if(salary <= 87000){
      return Math.round((3572 + (salary - 37000) * 0.325) / 12)
    }
    else if(salary <= 180000){
      return Math.round((19822 + (salary - 87000) * 0.37) / 12)
    }
    else {
      return Math.round((54232 + (salary - 180000) * 0.45) / 12)
    }
  }

  render() {
    return (
      <div className="test">
        {this.state.loading ? null :
          <ReactTable
            className="test -striped -highlight"
            showPagination={false}
            showPaginationBottom={false}
            showPageSizeOptions={false}
            data={this.state.data}
            columns={[
            {
              Header: "Name",
              accessor: 'name',
              width: 180
            },
            {
              Header: "Pay-Period",
              accessor: 'payperiod',
              width: 200
            },
            {
              Header: "Gross-Income",
              accessor: 'grossincome'
            },
            {
              Header: "Income-Tax",
              accessor: 'incometax'
            },
            {
              Header: "Net-Income",
              accessor: 'netincome'
            },
            {
              Header: "Super-Amount",
              accessor: 'superamount'
            },
          ]}
          defaultPageSize={this.props.pageSize}
          />
        }
      </div>
    );
  }
}

export default DataTable
