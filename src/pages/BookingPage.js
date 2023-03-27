import { useState } from 'react';
import '../styles/BookingPage.css'
export default function BookingPage() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [numofguests, setNumOfGuests] =  useState(0);
    const [date, setDate] = useState();
    //const [availabletimes, setAvailableTimes] = useState(['6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm']);
    const availabletimes = ['6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm']
    const [selectedTime, setSelectedTime] = useState(['6:00'])


    const checkDate = (e) => {
        setDate(e.target.value)
        console.log(date)
    }


    return(
        <>
        <form>
            <div>
                <label htmlFor="name"></label>
                <p>Name</p>
                <input
                    value={firstname}
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    type="text"
                    id="name"
                    required
                ></input>
                <p>First</p>
                <label htmlFor="lastname">Last Name</label>
                <input
                    value={lastname}
                    onChange={(e)=>{setLastName(e.target.value)}}
                    type="text"
                    id="lastname"
                    required
                ></input>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    value={date}
                    onChange={checkDate}
                    type="date"
                    id="date"
                ></input>
            </div>
            <div className='formContainer'>
                <label htmlFor="time-res"></label>
                <p>Time</p>
                <select
                    multiple={false}
                    value={selectedTime}
                    onChange = {(e) => {
                        setSelectedTime([...e.target.selectedOptions].map(o => o.value))
                    }}
                    id="time-res"
                >
                    <option>Choose a time!</option>
                    {availabletimes.map((timeoption) => {
                        return <option key={timeoption}>{timeoption}</option>;
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="numOfGuests">Number of Guests</label>
                <input
                    value={numofguests}
                    onChange={(e)=>{setNumOfGuests(e.target.value)}}
                    id="numOfGuests"
                    type="number"
                    min="1"
                    max="10"
                ></input>
            </div>
            <div>
                <label htmlFor="occasion">Dropdown</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Birthday</option>
                </select>
            </div>
            <input type="submit"></input>
        </form>
        </>
    );
};