import React from 'react'
import { Button, Container, Dialog, DialogContent, TextField } from '@material-ui/core'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { signIn } from './userSlice'
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = (open) => {
    const classes = useStyles()
    const dispatch = useDispatch()


    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [termAgreed, setTermAgreed] = React.useState(false)
    const [loginStatus, setLoginStatus] = React.useState('idle')

    const onUserNameChanged = (e) => setUserName(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)
    const onTermChanged = (e) => setTermAgreed(e.target.value)


    const canLogin = [userName, password, termAgreed].every(Boolean) && loginStatus === 'idle'

    const onLoginClicked = async () => {
        if (canLogin) {
            try {
                setLoginStatus('pending')
                const resultAction = await dispatch(
                    signIn({username: userName, password: password}))
                dispatch({ type: 'app/toggleLoginPanel'})
                unwrapResult(resultAction)
            } catch (err) {
                console.error('Failed to login', err)
            } finally {
                setLoginStatus('idle')
            }
        }
    }

    const handleClose = () => {
        dispatch({ type: 'app/toggleLoginPanel'})
    }

    return (
        <Container>
            <Dialog open={open} onClose={handleClose} maxWidth="xs">
                <DialogContent>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Username"
                            name="Username"
                            autoComplete="username"
                            autoFocus
                            onChange={onUserNameChanged}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onPasswordChanged}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Confirm Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onPasswordChanged}
                        />
                        <FormControlLabel
                            control={<Checkbox value="agreeTerm" color="primary" onChange={onTermChanged}/>}
                            label="Agree User Term"
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onLoginClicked}
                            disabled={true}
                        >
                            Register
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                 
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Login"}
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                        <br />
                    </div>
                </DialogContent>
            </Dialog>
        </Container>
    )
}