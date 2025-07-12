import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSort } from '../../store/sortSlice';
import './Tabs.scss';

const Tabs = () => {
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const onClickSort = (sortType) => {
    dispatch(setSort(sortType));
  };

  return (
    <div className="tabs">
      <div
        className={`tabs__element ${sort === 'cheap' ? 'tabs__element_active' : ''}`}
        onClick={() => onClickSort('cheap')}
      >
        Самый дешевый
      </div>
      <div
        className={`tabs__element ${sort === 'fast' ? 'tabs__element_active' : ''}`}
        onClick={() => onClickSort('fast')}
      >
        Самый быстрый
      </div>
      <div
        className={`tabs__element ${sort === 'optimal' ? 'tabs__element_active' : ''}`}
        onClick={() => onClickSort('optimal')}
      >
        Оптимальный
      </div>
    </div>
  );
};

export default Tabs;
