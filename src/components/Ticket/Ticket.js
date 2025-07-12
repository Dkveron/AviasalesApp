import React from 'react';
import './Ticket.scss';

const Ticket = ({ data }) => {
  const { price, carrier, segments } = data;

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDuration = (min) => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}ч ${m}м`;
  };

  const formatStops = (stops) => {
    const count = stops.length;
    if (count === 0) return 'БЕЗ ПЕРЕСАДОК';
    if (count === 1) return '1 ПЕРЕСАДКА';
    if (count < 5) return `${count} ПЕРЕСАДКИ`;
    return `${count} ПЕРЕСАДОК`;
  };

  return (
    <div className="ticket">
      <div className="ticket__title">
        <div className="ticket__price">{price.toLocaleString()} Р</div>
        <img src={`https://pics.avs.io/110/36/${carrier}.png`} alt="logo" />
      </div>
      <div className="ticket__details">
        {segments.map((segment, index) => (
          <div className="ticket__segment" key={index}>
            <div className="ticket__time_route">
              <div className="ticket__route">
                {segment.origin} – {segment.destination}
              </div>
              <div className="ticket__time">
                {formatTime(segment.date)} –{' '}
                {formatTime(
                  new Date(
                    new Date(segment.date).getTime() + segment.duration * 60000,
                  ),
                )}
              </div>
            </div>
            <div className="ticket__time_route">
              <div className="ticket__duration">В ПУТИ</div>
              <div className="ticket__time">
                {formatDuration(segment.duration)}
              </div>
            </div>
            <div className="ticket__time_route">
              <div className="ticket__stops">{formatStops(segment.stops)}</div>
              <div className="ticket__time">
                {segment.stops.join(', ') || '—'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
