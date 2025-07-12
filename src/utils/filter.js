export function filterAndSortTickets(tickets, filters, sortType) {
  const filtered = tickets.filter((ticket) => {
    const stops = ticket.segments.map((s) => s.stops.length);
    const matches = stops.some(
      (stop) =>
        (stop === 0 && filters.withoutTransfers) ||
        (stop === 1 && filters.oneTransfer) ||
        (stop === 2 && filters.twoTransfers) ||
        (stop === 3 && filters.threeTransfers),
    );
    return matches;
  });

  switch (sortType) {
    case 'cheap':
      return filtered.sort((a, b) => a.price - b.price);
    case 'fast':
      return filtered.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration),
      );
    case 'optimal':
      return filtered.sort((a, b) => {
        const aTime = a.segments[0].duration + a.segments[1].duration;
        const bTime = b.segments[0].duration + b.segments[1].duration;
        const aScore = a.price + aTime * 0.1;
        const bScore = b.price + bTime * 0.1;
        return aScore - bScore;
      });
    default:
      return filtered;
  }
}
