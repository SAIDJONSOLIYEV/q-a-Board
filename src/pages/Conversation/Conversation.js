
import React, { useState } from "react";
import Chat from "../Chat/CenterChat/Chat";
import './scss/Conversation.scss';
import Threads from "../Chat/Threads/Threads";
function Conversation() {
    return (
        <div className="wrapper">
            <Threads />
            <Chat />
        </div>
    )
}

export default Conversation