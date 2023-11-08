import BookingPageForm from "./BookingPageForm";

export default function BookingPage({ times, dispatch }) {
    return (
        <>
            <BookingPageForm times={times} dispatch={dispatch} />
        </>
    );
}