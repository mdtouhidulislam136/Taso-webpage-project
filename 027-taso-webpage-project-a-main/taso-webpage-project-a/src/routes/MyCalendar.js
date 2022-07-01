
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useTranslation} from 'react-i18next';

function MyCalendar() {
  const {t, i18n } = useTranslation();
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>{t('react-calendar')}</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>{t('calendardefault-date')}</span>{' '}
          {date.toDateString()}
        </p>
      )}


    </div>
  );
}

export default MyCalendar;