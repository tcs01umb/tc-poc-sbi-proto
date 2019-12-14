import React from 'react';
import history from '../../utils/history';
import {Grid, Card, CardContent, CardHeader,Avatar,Link } from "@material-ui/core";

class ParallelCard extends React.Component {
    constructor(props) {
      super(props)   
    }
    render() {
        return (
          <div>
        <Grid container  alignItems='center' justify='center' spacing={0} style={{flexDirection:'row'}}>
          <Grid item style={{padding:'0px'}}>
            <Card square elevation={1} style={{height:'250px',width:'250px'}}>  
            
            <img src={this.props.product.image} />
            
            </Card>
          </Grid>
          <Grid item style={{padding:'0px'}}>
            <Card square elevation={1} onClick={()=>{history.push(this.props.product.navigate)}} style={{height:'250px',width:'250px'}}>  
            <CardHeader title={this.props.product.topic} titleTypographyProps={{variant:"h6", align:"left", component:"p"}}
                  style={{color:'#041c3d',fontWeight:'bolder'}}  />
            <CardContent>
            <Grid container   justify='center' spacing={3}>     
              <Grid justify="center" item style={{color:'#041c3d'}}>  
                Please select from the below for getting a Quote.
              </Grid>  
              <Grid justify="flex-start" item >  
                {this.props.product.links.map(link => {
                return(<div><Link style={{color:'blue',textDecoration:'underline',paddingTop:'5px'}} to={link.target}>{link.label}</Link><br/></div>)
                })}
              </Grid> 
            </Grid>
            {/* </Paper> */}
            </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br/>
        </div>
    );
  }
}

export default ParallelCard;