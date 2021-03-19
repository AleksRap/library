import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';
import type { Icon as Value } from 'types';

type Props = {
  className?: string,
  value: Value,
  style?: CSSProperties,
};

const Icon:FC<Props> = ({ className, value, style }) => (
  <i className={cx(`icon-${value}`, className)} style={style} />
);

export default Icon;
