import React, { useEffect, useState } from 'react';

import Ticket from '../Ticket/Ticket';

import './TicketsList.scss';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTickets } from '../../store/ticketsSlice';
import { filterAndSortTickets } from '../../utils/filter';

const TicketsList = () => {
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);
  const sort = useSelector((state) => state.sort);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const noFiltersSelected =
    !filters.withoutTransfers &&
    !filters.oneTransfer &&
    !filters.twoTransfers &&
    !filters.threeTransfers;

  if (noFiltersSelected) {
    return (
      <section className="tickets-list">
        <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
      </section>
    );
  }

  const visibleTickets = filterAndSortTickets(tickets, filters, sort).slice(
    0,
    visibleCount,
  );

  return (
    <section className="tickets-list">
      {error && <div>Ошибка: {error}</div>}
      {!loading && tickets.length === 0 && (
        <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}
      {visibleTickets.map((ticket, index) => (
        <Ticket key={index} data={ticket} />
      ))}
      {loading && <div>Загрузка...</div>}
      {visibleCount < tickets.length && (
        <button
          className="tickets-list__show-more"
          onClick={() => setVisibleCount(visibleCount + 5)}
        >
          Показать еще 5 билетов!
        </button>
      )}
    </section>
  );
};

export default TicketsList;
