import React, { useState } from 'react';
import {Switch,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container, Paper,Card, CardHeader,Avatar,CardContent} from '@material-ui/core';
import {  ListItemIcon ,TextField,List,ListItem,ListItemText,Divider} from "@material-ui/core";
import axios from 'axios'

class PolicyDetails extends React.Component 
{   
    state = {
        coverage: {},
        owner: {},
        additionalDetails: {},
        premise: {},
    }
    constructor(props)
    {
      super(props)
    }  
    componentDidMount() {
        axios.get('https://jhjsl8jkbb.execute-api.us-east-1.amazonaws.com/v1/pc/sbi/policydetails/'+ this.props.id)
        .then(response => {
        
          this.setState({ coverage  : response.data.coverage,
                          owner  : response.data.owners,
                          additionalDetails  : response.data.additionalDetails,
                          premise  : response.data.premiseDetails,
                        })
        })
        .catch(console.log)
      }
    
      render(){

          return(<div>
              <TableRow>
                        <TableCell >
                        <Paper square>
                            <List >
                            <ListItem >
                                <ListItemText  primary="Coverage Details" />
                                </ListItem>
                                <ListItem >
                                <ListItemText  primary={"Liab -" + this.state.coverage.liabPerOccLimit +'/'+ this.state.coverage.liabPerOccAmt}/>
                                </ListItem>
                                <ListItem >
                                <ListItemText primary={"Business Prop -" + this.state.coverage.businessPropLimit +'/'+ this.state.coverage.businessPropAmt} />
                                </ListItem>
                            </List>
                        </Paper>
                        </TableCell>
                        <TableCell >
                        <Paper square>
                            <List >
                                <ListItem >
                                <ListItemText  primary="Owner Details" />
                                </ListItem>
                                <ListItem >
                                <ListItemText  primary={ this.state.owner.firstName }/>
                                </ListItem>
                                <ListItem >
                                <ListItemText  primary={ this.state.owner.lastName}/>
                                </ListItem>
                            </List>
                        </Paper>
                        </TableCell>
                        <TableCell >
                        <Paper square>
                            <List >
                                <ListItem >
                                <ListItemText  primary="Premise Details" />
                                </ListItem>
                                <ListItem >
                                <ListItemText  primary={ this.state.premise.firstName }/>
                                </ListItem>
                                <ListItem >
                                <ListItemText  primary={ this.state.premise.lastName}/>
                                </ListItem>
                            </List>
                        </Paper>
                        </TableCell>
                    </TableRow>
               </div>);
      }
}



export default PolicyDetails