import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, url, loading}) => {
  return (
    <div className={cx('viewer')}>
      
    </div>
  );
};

export default Viewer;