import { sortByDate } from '../sort';

const events = [
  {
    id: '1',
    title: 'The Blockchain demystified',
    description:
      'An interactive panel with Jeroen Lemaire (CEO of In The Pocket), Pieterjan Bouten (CEO of Showpad) and KBC',
    imageUrl: '',
    author: {
      id: '9',
      name: 'Stefanie Van Hove',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 06 2018 14:22:31 GMT+0100 (CET)',
    location: 'Talk Area',
    tags: [
      {
        id: 'newTech',
        name: 'New Tech',
      },
      {
        id: 'ai',
        name: 'AI',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
      {
        id: '12',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Kevin Meyvaert',
      },
      {
        id: '13',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jarno Verreyt',
      },
    ],
  },
  {
    id: '2',
    title: 'API Management',
    description: '',
    imageUrl: 'https://picsum.photos/300/250/?random',
    author: {
      id: '8',
      name: 'Cedric Devroey',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 06 2018 16:22:31 GMT+0100 (CET)',
    location: 'Workshop Area',
    tags: [
      {
        id: 'newTech',
        name: 'New Tech',
      },
      {
        id: 'innovation',
        name: 'Innovation',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
      {
        id: '12',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Kevin Meyvaert',
      },
      {
        id: '13',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jarno Verreyt',
      },
    ],
  },
  {
    id: '3',
    title: 'Shift The Game',
    description: '',
    imageUrl: 'https://picsum.photos/300/250/?random',
    author: {
      id: '6',
      name: 'Tom Van Helleputte',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 07 2018 12:22:31 GMT+0100 (CET)',
    location: 'Workshop Area',
    tags: [
      {
        id: 'agile',
        name: 'Agile',
      },
      {
        id: 'productAndBusinessDevelopment',
        name: 'Product & Business Development',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
    ],
  },
];

const sortedEventAsc = [
  {
    id: '1',
    title: 'The Blockchain demystified',
    description:
      'An interactive panel with Jeroen Lemaire (CEO of In The Pocket), Pieterjan Bouten (CEO of Showpad) and KBC',
    imageUrl: '',
    author: {
      id: '9',
      name: 'Stefanie Van Hove',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 06 2018 14:22:31 GMT+0100 (CET)',
    location: 'Talk Area',
    tags: [
      {
        id: 'newTech',
        name: 'New Tech',
      },
      {
        id: 'ai',
        name: 'AI',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
      {
        id: '12',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Kevin Meyvaert',
      },
      {
        id: '13',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jarno Verreyt',
      },
    ],
  },
  {
    id: '2',
    title: 'API Management',
    description: '',
    imageUrl: 'https://picsum.photos/300/250/?random',
    author: {
      id: '8',
      name: 'Cedric Devroey',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 06 2018 16:22:31 GMT+0100 (CET)',
    location: 'Workshop Area',
    tags: [
      {
        id: 'newTech',
        name: 'New Tech',
      },
      {
        id: 'innovation',
        name: 'Innovation',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
      {
        id: '12',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Kevin Meyvaert',
      },
      {
        id: '13',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jarno Verreyt',
      },
    ],
  },
  {
    id: '3',
    title: 'Shift The Game',
    description: '',
    imageUrl: 'https://picsum.photos/300/250/?random',
    author: {
      id: '6',
      name: 'Tom Van Helleputte',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 07 2018 12:22:31 GMT+0100 (CET)',
    location: 'Workshop Area',
    tags: [
      {
        id: 'agile',
        name: 'Agile',
      },
      {
        id: 'productAndBusinessDevelopment',
        name: 'Product & Business Development',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
    ],
  },
];

const sortedEventDesc = [
  {
    id: '3',
    title: 'Shift The Game',
    description: '',
    imageUrl: 'https://picsum.photos/300/250/?random',
    author: {
      id: '6',
      name: 'Tom Van Helleputte',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 07 2018 12:22:31 GMT+0100 (CET)',
    location: 'Workshop Area',
    tags: [
      {
        id: 'agile',
        name: 'Agile',
      },
      {
        id: 'productAndBusinessDevelopment',
        name: 'Product & Business Development',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
    ],
  },
  {
    id: '2',
    title: 'API Management',
    description: '',
    imageUrl: 'https://picsum.photos/300/250/?random',
    author: {
      id: '8',
      name: 'Cedric Devroey',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 06 2018 16:22:31 GMT+0100 (CET)',
    location: 'Workshop Area',
    tags: [
      {
        id: 'newTech',
        name: 'New Tech',
      },
      {
        id: 'innovation',
        name: 'Innovation',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
      {
        id: '12',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Kevin Meyvaert',
      },
      {
        id: '13',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jarno Verreyt',
      },
    ],
  },
  {
    id: '1',
    title: 'The Blockchain demystified',
    description:
      'An interactive panel with Jeroen Lemaire (CEO of In The Pocket), Pieterjan Bouten (CEO of Showpad) and KBC',
    imageUrl: '',
    author: {
      id: '9',
      name: 'Stefanie Van Hove',
      imageUrl: 'https://picsum.photos/300/250/?random',
    },
    date: 'Tue Mar 06 2018 14:22:31 GMT+0100 (CET)',
    location: 'Talk Area',
    tags: [
      {
        id: 'newTech',
        name: 'New Tech',
      },
      {
        id: 'ai',
        name: 'AI',
      },
    ],
    attendees: [
      {
        id: '10',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Thibault Maekelbergh',
      },
      {
        id: '11',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jonathan Dierckens',
      },
      {
        id: '12',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Kevin Meyvaert',
      },
      {
        id: '13',
        imageUrl: 'https://picsum.photos/300/250/?random',
        name: 'Jarno Verreyt',
      },
    ],
  },
];

test('sort by date ASC', () => {
  expect(sortByDate(events, 'ASC')).toEqual(sortedEventAsc);
  expect(events).toBe(events);
});

test('sort by date DESC', () => {
  expect(sortByDate(events, 'DESC')).toEqual(sortedEventDesc);
  expect(events).toBe(events);
});
