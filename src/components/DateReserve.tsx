"use client"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"

type DateReserveProps = {
  onChange: (date: string) => void;
};

export default function DateReserve({ onChange }: DateReserveProps) {
  return (
    <div className="rounded-lg w-fit flex flex-row justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          onChange={(newValue) => {
            // newValue เป็น dayjs | null
            const formatted = newValue ? newValue.format("YYYY-MM-DD") : "";
            onChange(formatted);
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
