"use client";
import { useAppSelector, Appdispatch } from "@/redux/store";
import { useDispatch, UseDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const bookingItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<Appdispatch>();
  if (!bookingItems || bookingItems.length === 0) {
    return (
      <div className="flex justify-center items-center">No Venue Booking</div>
    );
  }

  return (
    <div>
      {bookingItems.map((reservationItem: BookingItem) => (
        <div
          className="flex flex-col gap-2 bg-white rounded px-5 max-5 py-2 my-2 rounded shadow-md"
          key={reservationItem.nameLastname}
        >
          <h1 className="text-2xl">{reservationItem.venue}</h1>
          <div className="flex flex-col gap-1">
            <div className="text-md font-sans">
              Name: {reservationItem.nameLastname}
            </div>
            <div className="text-md font-sans">Tel: {reservationItem.tel}</div>
            <div className="text-md font-sans">
              Date: {reservationItem.bookDate}
            </div>
          </div>

            <div className="w-full flex justify-end">
                <button
            className="bg-slate-300 text-black px-2 py-2 rounded
            hover:bg-slate-400 active:bg-slate-500 transition duraation-200 cursor-pointer"
            onClick={() => dispatch(removeBooking(reservationItem))}
          >
            Remove
          </button>
            </div>
          
        </div>
      ))}
    </div>
  );
}
