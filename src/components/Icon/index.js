// <i className="icon iconfont icon-fti" />
import React from 'react';
import classNames from 'classnames';

export default function Icon({ type, className, ...rest }) {
  return (
    <i
      {...rest}
      className={classNames({
        'icon': true,
        iconfont: true,
        [`icon-${type}`]: true,
        [className]: className,
      })}
    />
  );
}
