import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';
import DatePicker from 'react-datepicker';
import { DATE } from 'appConstants';
import { Icon } from 'components';
import CustomHeader from './CustomHeader';
import styles from './styles.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';

type Props = {
  start: Date,
  end?: Date,
  setStart: (date: Date) => void,
  setEnd?: (date: Date) => void,
  error?: string,
  className?: string,
};

const offsetOptions = {
  offset: {
    enabled: true,
    offset: '125px, -50px',
  },
};

const Datepicker:FC<Props> = ({
  start,
  end = new Date(),
  setStart,
  setEnd = () => {},
  error,
  className,
}) => {
  const handleChange = useCallback((date): void => {
    const [startDate, endDate] = date;

    setStart(startDate);
    setEnd(endDate);
  }, [setStart, setEnd]);

  const handleChangeEnd = useCallback((date): void => {
    const [endDate] = date;
    setEnd(endDate);
  }, [setEnd]);

  const [isOpenStartCalendar, setOpenStartCalendar] = useState<boolean>(false);
  const [isOpenEndCalendar, setOpenEndCalendar] = useState<boolean>(false);

  const handleOpenStartCalendar = useCallback(() => {
    setOpenEndCalendar(false);
    setOpenStartCalendar(true);
  }, [setOpenStartCalendar]);

  const handleCloseStartCalendar = useCallback(() => {
    setOpenStartCalendar(false);
  }, [setOpenStartCalendar]);

  const handleOpenEndCalendar = useCallback(() => {
    setOpenStartCalendar(false);
    setOpenEndCalendar(true);
  }, [setOpenEndCalendar]);

  const handleCloseEndCalendar = useCallback(() => {
    setOpenEndCalendar(false);
  }, [setOpenEndCalendar]);

  const handleCloseCalendarOnScroll = useCallback(() => {
    handleCloseStartCalendar();
    handleCloseEndCalendar();
    return false;
  }, [handleCloseStartCalendar, handleCloseEndCalendar]);

  return (
    <div className={cx(styles.datepicker, className)}>
      <div className={cx(
        styles.input,
        error && styles.error,
      )}
      >
        <Icon value="calendar" className={styles.icon} />
        <DatePicker
          closeOnScroll={handleCloseCalendarOnScroll}
          open={isOpenStartCalendar}
          onClickOutside={handleCloseStartCalendar}
          onFocus={handleOpenStartCalendar}
          onBlur={handleCloseStartCalendar}
          onInputClick={handleOpenStartCalendar}
          selected={start}
          onChange={handleChange}
          startDate={start}
          endDate={end}
          className={styles.inputDate}
          dateFormat={DATE.UI}
          popperPlacement="top-end"
          calendarClassName={styles.calendar}
          popperModifiers={offsetOptions}
          selectsRange
          renderCustomHeader={
            // eslint-disable-next-line react/jsx-props-no-spreading
            (props) => <CustomHeader onClose={handleCloseStartCalendar} {...props} />
          }
        />
        -
        <DatePicker
          closeOnScroll={handleCloseCalendarOnScroll}
          open={isOpenEndCalendar}
          onClickOutside={handleCloseEndCalendar}
          onFocus={handleOpenEndCalendar}
          onBlur={handleCloseEndCalendar}
          onInputClick={handleOpenEndCalendar}
          selected={end}
          startDate={start}
          endDate={end}
          onChange={handleChangeEnd}
          className={cx(styles.inputDate, styles.end)}
          dateFormat={DATE.UI}
          minDate={start}
          popperPlacement="top-end"
          calendarClassName={styles.calendar}
          popperModifiers={offsetOptions}
          selectsRange
          renderCustomHeader={
            // eslint-disable-next-line react/jsx-props-no-spreading
            (props) => <CustomHeader onClose={handleCloseEndCalendar} {...props} />
          }
        />
      </div>
      {error && <span className={styles.textError}>{error}</span>}
    </div>
  );
};

export default Datepicker;
