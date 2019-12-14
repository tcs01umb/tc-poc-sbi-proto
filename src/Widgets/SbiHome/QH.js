import React from 'react';
import axios from 'axios'
import Policies from '../QuoteHistory/Policies'
import Quotes from '../QuoteHistory/Quotes'
import PolicyDetails from '../QuoteHistory/PolicyDetails'
import {Card, CardHeader,CardContent,Table,TableBody,TableCell,TableHead,TableRow, Button} from '@material-ui/core';
import history from '../../utils/history'
import { Route, Link } from 'react-router-dom'


class QH extends React.Component 
{
    state = {
        quotes:  [],
        policies:[]
    }
  constructor(props)
  {
    super(props)
  }  

  componentDidMount() {
    axios.get('https://jhjsl8jkbb.execute-api.us-east-1.amazonaws.com/v1/pc/sbi/policydetails')
    .then(response => {
      var data = response.data;
      var quote = [];
      var policy = [];
      console.log(data)
      data.forEach(element => {
          if (element.isQuote)
          {
             quote.push(element)
             console.log(quote)
          }
      });
      this.setState({ quotes  : response.data.filter(quote => !quote.isQuote && quote.policyId && quote.policyId.length > 0),
                      policies: response.data.filter(quote => quote.isQuote && quote.policyId && quote.policyId.length > 0)
                    })
    })
    .catch(console.log)
  }

  render() {
      console.log("sandeep policy count", this.state.policies.length );
      console.log("sandeep quote count", this.state.quotes.length );
      if ( this.state.policies.length > 0 )
      {
          return(
              <Policies props={this.state.policies} />
          );
      }
      else{
        return(
                <div> 
                    <Quotes props={this.state.quotes} />
                    <br />
                    <Link to="/ent/sbi/home"><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}  > 
                        Create a New Quote
                    </Button></Link>
                    
                </div>

                
            );
      }
  }
  
}

export default QH
