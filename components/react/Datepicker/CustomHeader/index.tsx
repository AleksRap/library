import React, { FC } from 'react';
import cx from 'classnames';
import { MONTH } from 'appConstants';
import { Icon, Text } from 'components';
import styles from './styles.module.scss';

type Props = {
  date: Date,
  decreaseMonth: () => void,
  increaseMonth: () => void,
  decreaseYear: () => void,
  increaseYear: () => void,
  prevMonthButtonDisabled: boolean,
  prevYearButtonDisabled: boolean,
  onClose: () => void,
};

const CustomHeader: FC<Props> = ({
  date,
  decreaseMonth,
  increaseMonth,
  decreaseYear,
  increaseYear,
  prevMonthButtonDisabled,
  prevYearButtonDisabled,
  onClose,
}) => {
  const month = MONTH[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className={styles.header}>
      <div className={styles.year}>
        <button
          type="button"
          onClick={decreaseYear}
          className={cx(
            styles.btnYear,
            styles.prev,
            prevYearButtonDisabled && styles.disabled,
          )}
        >
          <Icon
            value="dropdown"
            className={cx(
              styles.iconYear,
              styles.prev,
              prevYearButtonDisabled && styles.disabled,
            )}
          />
        </button>
        <Text color="basic-900">{year}</Text>
        <button
          type="button"
          onClick={increaseYear}
          className={cx(
            styles.btnYear,
            styles.next,
          )}
        >
          <Icon
            value="dropdown"
            className={cx(
              styles.iconYear,
              styles.next,
            )}
          />
        </button>
        <button
          type="button"
          onClick={onClose}
          className={styles.btnClose}
        >
          <Icon
            value="cross"
            className={styles.iconClose}
          />
        </button>
      </div>
      <div className={styles.month}>
        <Text
          tag="span"
          size="big"
          weight="bold"
          className={styles.monthText}
        >
          {month} {year}
        </Text>
        <button
          type="button"
          onClick={decreaseMonth}
          className={cx(
            styles.tool,
            prevMonthButtonDisabled && styles.disabled,
          )}
        >
          <Icon
            value="arrow"
            className={cx(
              styles.iconArrow,
              styles.left,
              prevMonthButtonDisabled && styles.disabled,
            )}
          />
        </button>
        <button
          type="button"
          onClick={increaseMonth}
          className={styles.tool}
        >
          <Icon
            value="arrow"
            className={styles.iconArrow}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomHeader;
