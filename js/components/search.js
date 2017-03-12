import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button} from 'react-bootstrap';
import Header from './header';

export default function Search(props){
    return(
        <div>
            <div>
                <Header />
            </div>
        <FormGroup id="search" className="search-form" onSubmit={props.onSubmit}>
            <InputGroup>
            <FormControl className="search-input" type="text" placeholder="Enter your profile name" value={props.username}  onChange={props.onChange}
                   onKeyPress={props.enterKey}
            />
            </InputGroup>
            <Button bsStyle="primary" className="search-submit" onClick={props.onSubmit}>Submit</Button>
        </FormGroup>
        </div>
    )
}