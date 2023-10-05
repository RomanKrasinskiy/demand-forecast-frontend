import DatePickerCalendarCSS from './DatePickerCalendar.module.css';
import DatePicker, { DateObject } from "react-multi-date-picker";
import Settings from "react-multi-date-picker/plugins/settings";
import highlightWeekends from "react-multi-date-picker/plugins/highlight_weekends";
import { useState } from "react";
export default function DatePickerCalendar() {
  const [date, setDate] = useState([
    new DateObject().setDay(),
    new DateObject().add(1, "month").setDay(),
  ]);

  return (
    <div className='calendar'>
    <DatePicker
        containerClassName={DatePickerCalendarCSS.container}
        inputClass={DatePickerCalendarCSS.input}
        // arrowClassName={DatePickerCalendarCSS.arrow}
        

        placeholder='Дата или период'
        value={date}
        onChange={setDate}
        numberOfMonths={2}
        
        plugins={[
          highlightWeekends(),

          // eslint-disable-next-line react/jsx-key
          <Settings
            position="left"
            calendars={["gregorian", "persian"]}
            locales={["en", "fa"]}
            modes={["multiple", "range"]}
            disabledList={["other"]}
          />

        ]}
      />
      
    </div>
      
    
  );
}
