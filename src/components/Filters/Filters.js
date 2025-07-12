import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleFilter } from '../../store/filtersSlice';
import './Filters.scss';

const Filters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChange = (filterName) => {
    dispatch(toggleFilter({ filter: filterName }));
  };

  return (
    <aside className="filters">
      <div className="filters__title">Количество пересадок</div>
      <div className="filters__options">
        <label>
          <input
            type="checkbox"
            checked={filters.all}
            onChange={() => handleChange('all')}
          />
          <span></span>
          Все
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.withoutTransfers}
            onChange={() => handleChange('withoutTransfers')}
          />
          <span></span>
          Без пересадок
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.oneTransfer}
            onChange={() => handleChange('oneTransfer')}
          />
          <span></span>1 пересадка
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.twoTransfers}
            onChange={() => handleChange('twoTransfers')}
          />
          <span></span>2 пересадки
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.threeTransfers}
            onChange={() => handleChange('threeTransfers')}
          />
          <span></span>3 пересадки
        </label>
      </div>
    </aside>
  );
};

export default Filters;
