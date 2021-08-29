import React from 'react'
import { fade, createStyles, InputBase, makeStyles, Toolbar, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Container from '@material-ui/core/Container';
import MainFeatured from './MainFeatured'
import Featured from './Featured'
import { Copyright } from '../../app/Copyright';
import seniorImage from '../../static/senior.jpeg'
import juniorImage from '../../static/junior.jpeg'

const useStyles = makeStyles(theme =>
    createStyles({
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: theme.spacing(4),
            width: '100%',
        },
        search: {
            position: 'static',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.55),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.65),
            },
            marginTop: theme.spacing(4),
            paddingLeft: 0,
            width: '300px',
            [theme.breakpoints.up('sm')]: {
                width: '400px',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60%',
        },
        featuredContainer: {
            display: 'flex',
            alignItems: 'stretch'
        },
        toolbar: {
            paddingLeft: 0,
        }
    }))


export const Welcome = () => {
    const classes = useStyles()

    const featureds = [
    {
        title: 'Students and recent graduates',
        description:
        'We offer a variety of scholarship programs, internships and full-time opportunities designed to empower you. Imagine the impact you can have and jumpstart your career. ',
        image: juniorImage,
        imageText: 'Image Text',
    },
    {
        title: 'Experienced professionals',
        description:
        'Want to make a difference? So do we. Step in to explore the wealth of career opportunities and take your career to the next level impact you can have and jumpstart your career. ',
        image: seniorImage,
        imageText: 'Image Text',
    },
    ]
      

    return(
        <div>
            <MainFeatured>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..."
                            classes={{root: classes.inputInput, input: classes.inputInput,}} 
                            inputProps={{ 'aria-label': 'search'}}
                        />
                    </div>
                </Toolbar>
            </MainFeatured>
            <Container>
                <Grid container spacing={4}>
                    {featureds.map((post) => (
                    <Featured key={post.title} post={post} />
                    ))}
                </Grid>
            </Container>
            <Copyright />
        </div>
    )
}