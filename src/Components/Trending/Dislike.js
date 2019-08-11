import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Like extends Component {
    
    render() { 
        return ( 
            <Button >
            <img alt = "DisLike" src = "https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"/>
            </Button>

         );
    }
}
 
export default Like;
