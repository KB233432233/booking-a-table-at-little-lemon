import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function BookingPageForm({ times, dispatch }) {

    const navigate = useNavigate();

    const [date, setDate] = useState('');
    const [time, setTime] = useState(times[0]);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [seted, setSeted] = useState(false);
    const [notSeted, setNotSeted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!seted) {
            setNotSeted(true);
            return;
        }

        if (numberOfGuests > 10) return;

        const state = {
            date: date,
            time: time,
            numberOfGuests: numberOfGuests,
            occasion: occasion,
        }
        dispatch({ state2: state });
        navigate('/Confirmed');

    }
    return (
        <>
            <form className="booking-form">
                <label htmlFor="res-date">Choose date <br />
                    {notSeted ? <span className="choose-date">required</span> : null}
                </label>
                <input type="date" id="res-date" name="res-date" onChange={(e) => {
                    setDate(e.target.value);
                    dispatch({ act: 'date' });
                    setSeted(true);
                }} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " name="res-time" value={time} onChange={(e) => {
                    setTime(e.target.value)
                }}>
                    {times.map((e) => {
                        return <option key={e}>{e}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)} />
                {numberOfGuests > 10 ? <span className="choose-date">no more than 10 guests per table</span> : null}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" onClick={handleSubmit} value="Make Your reservation" />
            </form>
        </>
    );
}