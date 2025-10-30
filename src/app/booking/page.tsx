"use client";
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { Dayjs } from "dayjs";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState("");

  const dispatch = useDispatch<Appdispatch>();
  const makeReservaion = () => {
    if (name && tel && venue && bookDate) {
      const item: BookingItem = {
        nameLastname: name,
        tel: tel,
        venue: venue,
        bookDate: bookDate,
      };
      dispatch(addBooking(item));
    }
  };
  return (
    <main className="w-[100%] p-4 flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-medium">Venue Booking</h1>

      <div className=" my-2 pt-3 rounded-lg pb-5 flex flex-col space-y-4 justify-center items-center bg-white">
        <div className=" flex flex-row space-x-5 ">
          <div className="">
            <TextField
              variant="standard"
              name="Name-Lastname"
              label="Name-Lastname"
              className="font-serif"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              name="Contact-Number"
              label="Contact-Number"
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
        </div>
        <div className="w-[80%] flex flex-row space-x-5">
          <Select
            variant="standard"
            name="location"
            id="venue"
            className="h-[2em] w-[200px] mt-3"
            onChange={(e) => setVenue(e.target.value as string)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
          <DateReserve onChange={(newDate) => setBookDate(newDate)} />
        </div>
        <div className="flex w-full items-end justify-end pe-10">
          <button
            className="border px-4 py-2 rounded hover:bg-zinc-100 active:bg-black active:text-white"
            name="Book Venue"
            onClick={makeReservaion}
          >
            Book Venue
          </button>
        </div>
      </div>
    </main>
  );
}
