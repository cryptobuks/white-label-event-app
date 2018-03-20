import { sortByDate } from '../sort';
import events from '../../assets/events.json';
import { sortedEventAsc, sortedEventDesc } from '../../assets/sortedEvents';

test('sort by date ASC', () => {
  expect(sortByDate(events, 'ASC')).toEqual(sortedEventAsc);
});

test('sort by date DESC', () => {
  expect(sortByDate(events, 'DESC')).toEqual(sortedEventDesc);
});
