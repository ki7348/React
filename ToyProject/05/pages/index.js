import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://image.ajunews.com/content/image/2020/10/18/20201018211753966706.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://image.ajunews.com/content/image/2020/10/18/20201018211753966706.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    }
]

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([])
    
    useEffect(()=>{
        setLoadedMeetups(DUMMY_MEETUPS)
    },[])

    return <MeetupList meetups={loadedMeetups}/>
 
}

export default HomePage