import React from 'react';
import {
    Select,
    FormControl,
    Typography,
    MenuItem,
    Input,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
    Checkbox,
    Container,
    TextField
} from "@material-ui/core";
import {connect} from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {setSelectedBusinessType} from '../../actions/index'

const busList = ["Offices of Lawyers","Offices of Notaries","Title Abstract and Settlement Offices","All Other Legal Services",
    "Offices of Certified Public Accountants", "Tax Preparation Services", "Payroll Services" ,"Other Accounting Services",
    "Interior Design Services","Industrial Design Services","Graphic Design Services", "Other Specialized Design Services",
    "Custom Computer Programming Services","Computer Systems Design Services", "Computer Facilities Management Services",
    "Other Computer Related Services", "Advertising Agencies","Outdoor Advertising", "Direct Mail Advertising", "Advertising Material Distribution Services",
    "Other Services Related to Advertising", "Photography Studios, Portrait", "Commercial Photography", "Translation and Interpretation Services",
    "IT Consultants", "Management Consultants", "Offices of Bank Holding Companies", "Offices of Other Holding Companies",
    "Corporate, Subsidiary, and Regional Managing Offices", "Office Administrative Services", "Facilities Support Services",
    "Employment Placement Agencies", "Executive Search Services", "Temporary Help Services", "Document Preparation Services",
    "Telephone Answering Services", "Telemarketing Bureaus and Other Contact Centers", "Private Mail Centers", "Other Business Service Centers (including Copy Shops)",
    "Collection Agencies", "Credit Bureaus", "Travel Agencies","Tour Operators","Convention and Visitor Bureaus", "All Other Travel Arrangement and Reservation Services",
    "Security Systems Services (excluding Locksmiths)", "Locksmiths", "Janitorial Services", "Landscaping Services", "Carpet and Upholstery Cleaning Services"
];

class BusinessSelection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    changeValue = (e,value) => {
        console.log("help value",value)
        this.props.setSelectedBusinessType(value);
    }
    render() {

        return (
            <div>
                <br/>
                <Grid>
                    <Typography  variant="body1" >
                        What is your business type?
                    </Typography>
                    <Autocomplete
                            id="combo-box-demo"
                            options={busList}
                            getOptionLabel={option => (typeof option == 'string' ? option: option)}
                            filterOption = {x => x}
                            style={{ width: "70%",float:"center" , paddingLeft: "15%"}}
                            disableOpenOnFocus
                            onChange={this.changeValue}
                            renderInput={params => (
                                <TextField {...params}
                                           required
                                           name="businessTypeSelected"
                                           id="businessTypeSelected"
                                           margin="normal"
                                           variant="outlined"
                                           placeholder = "i.e Landscapping, Photography, etc..."
                                           style = {{width:'120%'}}
                                           onChange={this.changeValue}
                                />
                            )}
                        /></Grid>
            </div>
        );
    }
}

export default connect(undefined,{setSelectedBusinessType})(BusinessSelection)