import { Container, makeStyles, Paper, Typography } from '@material-ui/core';
import axios from 'axios'
import React from 'react'
import { domainName } from '../../app/api'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          padding: theme.spacing(2),
        },
    },
}));

export const Search = ({ match }) => {
    const { keywords } = match.params
    const classes = useStyles()
    const [page, setPage] = React.useState(0)

    const searchResult = async () => {
        const response = await axios.get(`${domainName}search?s=${keywords}`)
        return response.searchResult
    }

    return (
        <Container maxWidth="md">
            <Paper className={classes.paper} >
                
            </Paper>
        </Container>
    )
}