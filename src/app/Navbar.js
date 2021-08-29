import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { AppBar, Button, createStyles, makeStyles, Menu, MenuItem, Toolbar, Typography, withStyles } from '@material-ui/core'
import { LocationCityRounded } from '@material-ui/icons'

const useStyles = makeStyles(theme =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        logo: {
            pointerEvents: 'none',
            paddingRight: theme.spacing(1),
        },
        toolbar: {
            // minHeight: '4em',
            backgroundColor: '#2f2f2f',
          },
        HomeButton: {
            fontFamily: 'Arial',
            textTransform: 'none',
            fontSize: '1.3em',
            color: 'white',
        },
        logButton: {
            fontFamily: 'Arial',
            textTransform: 'none',
            color: 'white',
            justifySelf: 'flex-end',
            marginLeft: 'auto',
            marginRight: theme.spacing(2),
        },
        favButton: {
            fontFamily: 'Arial',
            textTransform: 'none',
            color: 'white',
        },
        barTextButton: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'block',
            },
            fontSize: '1.1em',
            fontFamily: 'Arial',
            textTransform: 'none',
            paddingRight: theme.spacing(1),
            color: 'white',
        }
    })
)

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ));
  

export const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const userName = useSelector(state => state.user.user.preferName)

    let loginNote = null
    if (userName) {
        loginNote = (
            <>
                Welcome, {userName}
            </>
        )
    } else {
        dispatch({ type: 'user/fetchUser' })
        loginNote = (
            <>
                Log in
            </>
        )
    }

    const onFavoriteClicked = (e) => setArchorEl(e.currentTarget)

    const onSigninClicked = (e) => {
        if (userName) {
            setArchorUser(e.currentTarget)
        } else {
            dispatch({ type: 'app/toggleLoginPanel'})
        }
    }
    
    const [anchorEl, setArchorEl] = React.useState(null)
    const [anchorUser, setArchorUser] = React.useState(null)

    const jobList = useSelector(state => state.app.favorateJobs)
    const history = useHistory()

    let MenuItems = null
    if (jobList.length !== 0) {
        MenuItems = jobList.map(element => 
            <MenuItem onClick={e => handleMenuItemClick(e, element.jobId)}>
                {element.title} <br />
                {element.city}
            </MenuItem>
    )} else {
        MenuItems =  <MenuItem onClick={e => setArchorEl(null)}>It's Empty Add Some<br /> This is the second line</MenuItem>
        }


    const handleMenuItemClick = (e, jobId) => {
        const id = jobId
        setArchorEl(null)
        history.push(`/job/${id}`)
    }

    const handleMenueClose = () => setArchorEl(null)
    
    const handleUserMenueClose = () => setArchorUser(null)

    const handleACClick = () => history.push("/actioncenter")
    const handleSignOut = () => dispatch({ type: 'user/signOut'})

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <LocationCityRounded fontSize="large" />
                    <Typography className={classes.logo} variant='h6' noWrap>
                        CTOS
                    </Typography>
                    <Button className={classes.HomeButton} component={RouterLink} to="/">
                        Careers
                    </Button> 
                    <Button className={classes.barTextButton}>
                        Professional
                    </Button>
                    <Button className={classes.barTextButton}>
                        Students and Graduates
                    </Button>
                    <Button className={classes.logButton} onClick={onSigninClicked}>
                        {loginNote}
                    </Button>
                    <Button className={classes.favButton} onClick={onFavoriteClicked} >
                        Favorites☆ 
                    </Button>
                </Toolbar>
            </AppBar>
            
            <StyledMenu id="user-menu" anchorEl={anchorUser} 
                keepMonted open={Boolean(anchorUser)} onClose={handleUserMenueClose}>
                <MenuItem onClick={handleACClick}>
                    Action Center
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                    Log out
                </MenuItem>
            </StyledMenu>
            <StyledMenu id="favorite-job" anchorEl={anchorEl} 
                keepMonted open={Boolean(anchorEl)} onClose={handleMenueClose}>
                {MenuItems}
            </StyledMenu>
        </div>
    )
}