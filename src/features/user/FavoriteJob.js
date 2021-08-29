import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Menu, MenuItem } from '@material-ui/core'

export const FavoriteJob = (anchor) => {
    let jobList = useSelector(state => state.user.favorateJobs)
    
    const history = useHistory()

    let MenuItems = null

    if (jobList) {
        MenuItems = jobList.map(element => 
            <MenuItem onClick={e => handleMenuItemClick(e, element.jobId)}>
                {element.title}
                </MenuItem>
        )}
 
    const [anchorEl, setArchorEl] = React.useState(null)
    setArchorEl(anchor)

    const handleMenuItemClick = (e, jobId) => {
        const id = jobId
        setArchorEl(null)
        history.push(`/job/${id}`)
    }

    return (
        <div>
            <Menu id="favorite-job" anchorEl={anchorEl} 
                keepMonted open={Boolean(anchorEl)}>
                {MenuItems}
                <MenuItem> Hello World</MenuItem>
            </Menu>
        </div>
    )
}