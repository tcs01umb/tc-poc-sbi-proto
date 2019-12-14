import React from 'react';
import ZipQueryHandler from "../ZipAdd/ZipQueryHandler";
import ZipPlace from "../ZipAdd/ZipPlace";
import GoogleMap from "../ZipAdd/GoogleMap";
import { MobileStepper,Button,Card, CardContent, Typography,CardHeader,ListItemIcon ,TextField,List,ListItem,ListItemText,Divider,Checkbox} from "@material-ui/core";
import {connect} from "react-redux";
import {setZIPCodeInfo} from "../../actions";

var zipcodedata = { zip: "", city: "", state: "", notFound: false };
class ZipGetter extends React.Component {
    constructor(props) {
      super(props)    
    }

    changeHandler(data) {
        this.props.setZIPCodeInfo(data)
    }

    render() {
        return (
          <div>
                <ZipQueryHandler
                    render={data => (
                        <card>
                        <CardContent>
                          <Typography gutterBottom variant="body1" >
                          Please enter your zip code
                          </Typography>
                          <ZipPlace data={data} primarydriver={this.primarydriver} onChange={this.changeHandler(data)}/>
                          {/* {data.city && <GoogleMap lat={data.lat} lon={data.lon} />}    */}
                          <div style={{display:'none'}}>
                              {zipcodedata.zip=data.zip}
                              {zipcodedata.city=data.city}
                              {zipcodedata.state=data.state}
                          </div>
                        </CardContent>
                        </card>                        
                    )}                    
                  />  
                  {/* {this.props.setStateZipCode(zipcodedata)}  */}
            </div>
        );
    }
}

export default connect(undefined, { setZIPCodeInfo})(ZipGetter)