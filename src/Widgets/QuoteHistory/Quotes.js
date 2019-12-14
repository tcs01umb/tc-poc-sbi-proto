import React from 'react';
import {Switch,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container, Paper,Card, CardHeader,Avatar,CardContent} from '@material-ui/core';

function Quotes({props}){

        return( 
            <div>
              {(props || []).map((contact) => (
                <Card square elevation={4}>
                    <TableRow>
                        <TableCell align='center' style={{paddingLeft:'5px',paddingRight:'5px'}}>{contact.lastVisitedPage?" Small Business Quote Saved on "+contact.lastVisitedPage : "Small Business Quote"}</TableCell>
                        <TableCell align='center' style={{paddingLeft:'5px',paddingRight:'5px'}}> Effective Date:- {contact.policyEffDate}</TableCell>
                        <TableCell align="center" style={{paddingLeft:'5px',paddingRight:'5px'}}> Expiration Date:- {contact.policyExpDate}</TableCell>
                        <TableCell align="center" style={{paddingLeft:'5px',paddingRight:'5px'}}> <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} > 
                        Edit Quote
                    </Button></TableCell>
                    </TableRow>
                </Card>
                
              ))}
            </div>
            ) 
}

export default Quotes