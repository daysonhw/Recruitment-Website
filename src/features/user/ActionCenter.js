import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as CarbinSVG } from "../../static/cabin.svg"
import EmptyStateTamplate from '../../component/emptyState/EmptyState'
import { useHistory } from 'react-router'

function EmptyState() {
    return (
        <EmptyStateTamplate
                image={<CarbinSVG />}
                title="Empty Actionc Center"
                description="It's empty, please apply one, then go back"
        />
    )
}

export const ActionCenter = () => {
    const user = useSelector(state => state.user.user)
    const actions = user.actions
    const history = useHistory()

    let RenderedView
    if (user.preferName) {
        if (actions) {
                RenderedView = () =>{
                    return(
                        <h1>Action Center</h1>
                    )
                }
        }
    } else {
        console.warn("Not signined")
        history.push("/")
    }

    return (
        <>
        {RenderedView? <RenderedView /> : <EmptyState />}
        </>
    )
}