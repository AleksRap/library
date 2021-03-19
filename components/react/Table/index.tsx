/* eslint-disable arrow-body-style, react/jsx-props-no-spreading */
import React, { FC, useCallback, useMemo } from 'react';
import cx from 'classnames';
import {
  useTable,
  usePagination,
  useExpanded,
  useSortBy,
  Row,
} from 'react-table';
import ReactPaginate from 'react-paginate';
import { Text } from 'components';
import type { TableProps as Props } from 'types';
import TableRow from './TableRow';
import ArrowLabel from './ArrowLabel';
import DotLabel from './DotLabel';
import styles from './styles.module.scss';

const hooks = [
  useSortBy,
  useExpanded,
  usePagination,
];

const Table: FC<Props> = ({
  columns,
  data,
  withPagination = false,
  withSorting = false,
  isLoading = false,
  pageSize = 20,
  count = 0,
  isManualSortBy = false,
  forcePage,
  initialSortBy,
  onSortBy,
  onPageChange = () => {},
  className,
  classNameTitleCell,
  classNameCell,
  title,
  maxHeight = 'auto',
  childrenHeader,
}) => {
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
    page,
    gotoPage,
    state: { sortBy, pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize },
      manualSortBy: isManualSortBy,
      useControlledState: (defaultState) => ({
        ...defaultState,
        pageIndex: forcePage || defaultState.pageIndex,
        sortBy: initialSortBy || defaultState.sortBy,
      }),
    },
    ...hooks,
  );

  const handlePageChange = useCallback((selected: number) => {
    if (forcePage !== undefined) onPageChange(selected);
    else gotoPage(selected);
  }, [forcePage]);

  const pageCount = useMemo<number>(() => {
    return Math.ceil((count || data.length) / pageSize);
  }, [data.length, pageSize, count]);

  const isPaginationVisible = useMemo<boolean>(() => {
    return ![withPagination, !isLoading, pageSize < (count || data.length)].includes(false);
  }, [withPagination, isLoading, pageSize, count, data.length]);

  return (
    <div className={cx(styles.wrap, className)}>
      {title && (
        <div className={styles.header}>
          <Text
            color="primary"
            weight="bold"
            className={styles.title}
          >
            {title}
          </Text>

          <div className={styles.headerChildren}>
            {childrenHeader}
          </div>
        </div>
      )}

      <div
        className={cx(
          styles.wrapTable,
          maxHeight === 'auto' && styles.withoutScroll,
        )}
        style={{ maxHeight: `${maxHeight === 'auto' ? maxHeight : `${maxHeight}px`}` }}
      >
        <table
          {...getTableProps({
            className: styles.table,
          })}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                // condition template from props withSorting
                  withSorting ? (
                    <th {...column.getHeaderProps(
                      column.getSortByToggleProps({
                        className: cx(styles.th, classNameTitleCell),
                        style: {
                          width: column.width,
                        },
                        onClick: () => {
                          if (column.canSort) {
                            if (onSortBy) {
                              onSortBy([{ id: column.id, desc: sortBy[0].desc || false }]);
                            } else {
                              column.toggleSortBy();
                            }
                          }
                        },
                      }),
                    )}
                    >
                      <div className={styles.sortWrap}>
                        {column.render('Header')}
                        {/* any - because "disableSortBy" is absent into react-table (bug) */}
                        {/* eslint-disable  @typescript-eslint/no-explicit-any */}
                        {(withSorting && !(column as any).disableSortBy) && (
                        <span className={cx(styles.sortArrows, {
                          [styles.desc]: column.isSorted && column.isSortedDesc,
                          [styles.asc]: column.isSorted && !column.isSortedDesc,
                        })}
                        />
                        )}
                      </div>
                    </th>
                  ) : (
                    <th {...column.getHeaderProps({
                      className: cx(styles.th),
                    })}
                    >{column.render('Header')}
                    </th>
                  )
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {data.length ? (withPagination ? page : rows).map((row: Row) => {
              prepareRow(row);
              return (
                <TableRow
                  key={row.id}
                  row={row}
                  classNameCell={classNameCell}
                />
              );
            }) : (
              <tr>
                <td colSpan={columns.length} className={styles.empty}>
                  <Text className={styles.preloader} align="center">{isLoading ? 'Loading ...' : 'No data found...'}</Text>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {isPaginationVisible && (
          <ReactPaginate
            forcePage={forcePage || pageIndex}
            previousLabel={<ArrowLabel />}
            nextLabel={<ArrowLabel direction="right" />}
            breakLabel={<DotLabel />}
            breakClassName={styles.dotWrap}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            containerClassName={styles.pagination}
            pageClassName={styles.paginationItem}
            previousClassName={styles.paginationItem}
            nextClassName={styles.paginationItem}
            disabledClassName={styles.paginationItemDisabled}
            pageLinkClassName={styles.paginationLink}
            activeLinkClassName={styles.paginationLinkActive}
            activeClassName={styles.paginationItemActive}
            previousLinkClassName={styles.paginationPreviousLink}
            nextLinkClassName={styles.paginationNextLink}
            onPageChange={({ selected }) => handlePageChange(selected)}
          />
        )}
      </div>
    </div>
  );
};

export default Table;
