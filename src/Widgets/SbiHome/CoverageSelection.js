import React from 'react';
import { Select,FormControl, Typography,MenuItem,Input ,Grid,List,ListItem,ListItemText,Divider,Checkbox, Container} from "@material-ui/core";
import {connect} from "react-redux";
import {setSBICoverageName} from "../../actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
const lobs = [
    {
        lob:"Business Owners"
    },
    {
        lob:"General Liability"
    },
    {
        lob:"Professional Liability"
    },
    {
        lob:"Worker Compensation"
    },
    {
        lob:"Commercial Auto"
    },
    {
        lob:"Commercial Umbrella"
    },
    {
        lob:"Cyber Liability"
    }
]

const coverageSelection =
    {
        "coverage": null,
        "policyDate": null
    }

class CoverageSelection extends React.Component {
    constructor(props) {
      super(props) 
      this.state = { 
        selectedval:"General Liability",
          startDate: new Date()
    };   
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
        coverageSelection.policyDate =moment(date).format('MM/DD/YYYY');
        coverageSelection.coverage = this.state.selectedval;
        console.log("coverageSelection",coverageSelection)
        this.props.setSBICoverageName(coverageSelection);
    };
    changeValue = (e) => {
        this.setState({selectedval:e.target.value});
        if(e.target && e.target.name === "coverage") {
            coverageSelection.coverage = e.target.value;
        }
        coverageSelection.policyDate =moment().format('MM/DD/YYYY');
        this.props.setSBICoverageName(coverageSelection);
    }
    render() {
        console.log("this.sate.", this.state.selectedval)
        return (
          <div>
              <br/>


              <Grid container alignContent='center' alignItems='center' direction='column' justify='center' >
              <Typography  variant="body1" >
                    Select the coverage you need
                </Typography>         
                <br/>
                <FormControl variant="outlined" >
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    input={<Input />}
                    name="coverage"
                    value={this.state.selectedval}
                    onChange={this.changeValue}
                    style={{width:'120%'}}>
                    { lobs.map(lo=> {
                        return(<MenuItem square value={lo.lob}>{lo.lob}</MenuItem>)
                    })                    
                }
                </Select>
                </FormControl>

              </Grid><br />
                  <Grid container alignContent='center' alignItems='center' direction='column' justify='center' >
                      <label>
                          Select the effective date of policy
                      </label>
                          <DatePicker name="policyDate" id="policyDate"selected={this.state.startDate}
                                      onChange={this.handleChange}
                          />
                  </Grid>
          </div>
          );
        }
    }

export default connect(undefined, { setSBICoverageName})(CoverageSelection)