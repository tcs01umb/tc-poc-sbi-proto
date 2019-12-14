import React from 'react';
import {Card, CardHeader,CardContent,Table,TableBody,TableCell,TableHead,TableRow, Button} from '@material-ui/core';
import PolicyDetails from '../QuoteHistory/PolicyDetails'

function Policies({props}){
    console.log("sandeep inside POlicies",props)
    return( 
        <div>
              {(props || []).map((contact) => (
                <Card square elevation={4}>
                    <div key={contact.policyId.toString()}>
                    <TableRow>
                        <TableCell align='center' style={{paddingLeft:'5px',paddingRight:'5px'}}>{contact.lastVisitedPage?"Quote Saved on "+contact.lastVisitedPage : "Auto Insurance Quote"}</TableCell>
                        <TableCell align='center' style={{paddingLeft:'5px',paddingRight:'5px'}}> Effective Date:- {contact.policyEffDate}</TableCell>
                        <TableCell align="center" style={{paddingLeft:'5px',paddingRight:'5px'}}> Expiration Date:- {contact.policyExpDate}</TableCell>
                    </TableRow>
                    <TableRow> 
                        <PolicyDetails id={contact.policyId}/>
                    </TableRow>
                    <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} > 
                        View Policy Details
                    </Button>
                    </div>
                </Card>
                
              ))}
            </div>
        )
}

export default Policies