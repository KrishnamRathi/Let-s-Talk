import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { IconButton, Avatar } from '@material-ui/core';
import { DonutLarge, MoreVert, Chat, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{user}] = useStateValue();
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            // setRooms(snapshot.docs.map)
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">

            <div className="sidebar_header" >
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search" >
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Type something" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map(room => {
                    return <SidebarChat name={room.data.name} id={room.id} key={room.id} />
                })}
            </div>
        </div>
    )
}

export default Sidebar
