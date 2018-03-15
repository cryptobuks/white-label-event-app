import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import {
  ScheduleItem,
  ScheduleItemButton,
  ScheduleItemHeader,
  ScheduleItemDetail,
} from './ScheduleItem';

import {
  SchedulePagination,
} from './ScheduleNavigation';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('ScheduleItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Main', () => (
    <ScheduleItem
      author={
        {
          id: '8',
          name: 'Cedric Devroey',
          imageUrl: 'https://picsum.photos/300/250/?random',
        }
      }
      title="Bridging the gap"
      location="Arena"
      date={Date.now()}
    />
  ))
  .add('Button', () => (
    <ScheduleItemButton />
  ))
  .add('Header', () => (
    <ScheduleItemHeader author="Thibault Maekelbergh" title="Bridging the gap" />
  ))
  .add('Detail', () => (
    <ScheduleItemDetail date={Date.now()} location="Arena" />
  ));

let i = 0;

handleTouchableTap = (destination, total, index) => {
  if (index + destination >= 0 && index + destination < total) i += 1;
};

storiesOf('ScheduleNavigation', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Pagination', () => (
    <SchedulePagination
      index={i}
      total={5}
      tracks={[
        {
          id: 'innovation',
          title: 'Innovation',
        },
        {
          id: 'productAndBusinessDevelopment',
          title: 'Product & Business development',
        },
        {
          id: 'newTech',
          title: 'New Tech',
        },
        {
          id: 'ai',
          title: 'AI',
        },
        {
          id: 'agile',
          title: 'Agile',
        },
      ]}
      onNextTap={this.handleTouchableTap}
    />
  ));

