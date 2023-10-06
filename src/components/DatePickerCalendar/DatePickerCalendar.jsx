import DatePickerCalendarCSS from './DatePickerCalendar.module.css';
import DatePicker from "react-multi-date-picker";
import Settings from "react-multi-date-picker/plugins/settings";
import highlightWeekends from "react-multi-date-picker/plugins/highlight_weekends";
import { useRef, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import colors from 'react-multi-date-picker/plugins/colors';
import weekends from "react-multi-date-picker/plugins/highlight_weekends"

export default function DatePickerCalendar() {
  const [props, setProps] = useState({});
  const datePickerRef = useRef();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
    if (!isDatePickerOpen && datePickerRef.current) {
      datePickerRef.current.openCalendar();
    } else {
      datePickerRef.current.closeCalendar();
    }
    
  };

  const [selectedDates, setSelectedDates] = useState(); // будем мапиться по массиву, переводить даты в строку .toString() и отправлять запрос с датами на бэк
  // console.log(selectedDates);

  return (
    <div className={DatePickerCalendarCSS.calendar} >
    <DatePicker
      {...props}
        value={selectedDates}
        onChange={setSelectedDates}
        onPropsChange={setProps}
        ref={datePickerRef}
        containerClassName={DatePickerCalendarCSS.container}
        inputClass={DatePickerCalendarCSS.input}
        placeholder='Дата или период'
        
        numberOfMonths={2}
        plugins={[
          weekends([6, 7]),
          highlightWeekends(),
          colors({ defaultColor: "blue" }), 
          // eslint-disable-next-line react/jsx-key
          <Settings
            position="right"
            disabledList={["calendar", "locale", "otherPickers", 'other' ]}
            modes={["multiple", "range"]}
          />

        ]}
      />
      <button className={DatePickerCalendarCSS.arrowButton} onClick={toggleDatePicker}>
        <ArrowDropDownIcon
          className={DatePickerCalendarCSS.arrow}
        />
      </button>
      
    </div>
      
    
  );
}
