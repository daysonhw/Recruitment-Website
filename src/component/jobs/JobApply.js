import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { domainName } from '../../app/api'
import { Dialog, DialogContent } from '@material-ui/core';

const url = `${domainName}/submit-job`;

export const JobApply = (jobId) => {

    const dispatch = useDispatch()

    const open = useSelector(state => state.app.isApplyPanelOpen)

    const handleClose = () => {
        dispatch({ type: 'app/toggleApplyPanel'})
    }

    return (
        <Dialog open={open} onClose={handleClose}>
                <iframe title="apply" width="1100" height="800" src="http://127.0.0.1:8000/resume/add/?apply_position=TEST"></iframe>
        </Dialog>
    )
}