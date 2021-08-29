import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { domainName } from '../../app/api'
import { useDispatch } from 'react-redux';
import { JobApply } from './JobApply'
import { Breadcrumbs, Container, Link, makeStyles, Paper, Button, IconButton, Icon } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    paper: {
        '& > *' : {
            margin: theme.spacing(1),
        },
    },
    text: {
    whiteSpace: "pre-line",
    },
    button: {
    margin: theme.spacing(1),
    },
  }));


  
export const JobDetail = () => {
    const classes = useStyles()
    
    const params = useParams()
    const jobId = params.jobId

    const history = useHistory()
    const dispatch = useDispatch()


    const [content, setContent] = React.useState('')
    
    const fetchJob = async () => {
        const response = await axios.get(`${domainName}job/${jobId}/`)
        return response.data
    }
    if (!content) {
        fetchJob().then(data => setContent(data))
    }
    
    const job_name = content.job_name
    const city = '北京'

    const onApplyClicked = () => {
        // window.open(`http://careers.ctos.ltd:8000/resume/add/?apply_position=${job_name}&city=${city}`)
        dispatch({ type: 'app/toggleApplyPanel', payload: jobId })
    }

    const onFavoriteClicked = () => {
        dispatch({ type: 'app/toggleJobFavorited', payload: {jobId, 'title': job_name, city} })
    }

    return(
        <div>
            <Container>
                <Paper elevation={3} className={classes.paper}>
                    <Typography component="h2" variant="h5" paragraph>
                        {content.job_name}
                    </Typography>
                    <Button className={classes.button} variant="contained" color="primary" onClick={onApplyClicked}>
                        申请
                    </Button>
                    <Button endIcon={<FavoriteIcon />} className={classes.button} variant="contained" color="secondary" onClick={onFavoriteClicked}>
                        收藏
                    </Button>
                    <Typography variant="body1" paragraph>
                        {content.job_responsibility}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {content.job_requirement}
                    </Typography>

                </Paper>
            </Container>
            <JobApply open={onApplyClicked}/>
        </div>
    )
}