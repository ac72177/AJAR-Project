import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notifyOnSuccess, notifyOnFail } from '../utils/toastNotifications'


function SharePlan() {
    const [inviteId, setInviteId] = useState("");
    const { user } = useAuth0();

    async function consumeInvite() {
        const body = {
            owner: user.sub
        }
        
        try {
            const response = await fetch("api/invites/" + inviteId, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })

            if (!response.ok) {
                const errorMsg = data?.message;
                console.log(errorMsg)
                notifyOnFail("Couldn't add plan. Make sure your friend clicks the `invite user` button first to create an invitation.")
                return
            }
            notifyOnSuccess("New plan added! Have fun with your shared plan!")
        } catch {
            notifyOnFail("Couldn't add plan. Make sure your friend clicks the `invite user` button first to create an invitation.")
        }
    }

    return (
        <Stack spacing={2}>
            <h1> Share Plan </h1>
            <h3>Add a friend's plan:</h3>

            <TextField id="outlined-basic" label="Invite ID" variant="outlined"
                onChange={(event => setInviteId(event.target.value))} />
            <Button onClick={() => {
                consumeInvite()
            }}>Add Plan</Button>
            <ToastContainer />
        </Stack>
    );
}

export default SharePlan;