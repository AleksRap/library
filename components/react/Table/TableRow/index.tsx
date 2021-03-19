/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import cx from 'classnames';
import type { Cell } from 'react-table';
import type { TableRowProps as Props } from 'types';
import styles from './styles.module.scss';

const TableRow: FC<Props> = ({
  row,
  className,
  classNameCell,
}) => (
  <>
    <tr
      className={cx(
        styles.row,
        row.isExpanded && !row.subRows.length && styles.rowExpanded,
        className,
      )}
      {...row.getRowProps()}
    >
      {row.cells.map((cell: Cell) => (
        <td
          {...cell.getCellProps({
            className: cx(
              styles.cell,
              classNameCell,
            ),
          })}
          style={{
            width: cell.column.width,
          }}
        >
          {cell.render('Cell')}
        </td>
      ))}
    </tr>
  </>
);

export default TableRow;
