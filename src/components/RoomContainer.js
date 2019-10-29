import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'

// Import the consumer to access the context
import {withRoomConsumer} from '../context'
import Loading from './Loading'

// We are now accessing context with the higher function 
// in context.js
function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading/>;
    }
    return  (
        <>
        <RoomsFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer);

/* import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'

// Import the consumer to access the context
import {RoomConsumer} from '../context'
import Loading from './Loading'


export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading,sortedRooms,rooms} = value
                    if(loading){
                        return <Loading/>;
                    }
                    return  (
                        <>
                        Hello from Rooms Container
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                        </div>
                    )
                }
            }
        </RoomConsumer>
        
    )
}
 */