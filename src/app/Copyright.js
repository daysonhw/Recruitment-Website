import { Link, Typography } from "@material-ui/core";
import React from "react";

export const Copyright = () => {
    return (
        <>
            <br />
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright @'}
                <Link color="inherit" href="/">
                    CTOS.LTD
                </Link>{'/'}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
  }