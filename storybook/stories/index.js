import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import SmallView from './SmallView';
import DarkView from './Darkview';
import {
  ScheduleItem,
  ScheduleItemButton,
  ScheduleItemHeader,
  ScheduleItemDetail,
  Title,
  Label,
} from './ScheduleItem';

import {
  SchedulePagination,
  NavigationItem,
} from './ScheduleNavigation';

import {
  PersonalScheduleButton,
} from './PersonalSchedule';

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
  .add('Title', () => (
    <Title value="Bridging The Gap" />
  ))
  .add('Label', () => (
    <Label value="Label" color="pink" />
  ))
  .addDecorator(getStory => <CenterView><SmallView>{getStory()}</SmallView></CenterView>)
  .add('Detail', () => (
    <ScheduleItemDetail date={Date.now()} location="Arena" />
  ));

storiesOf('ScheduleNavigation', module)
  .addDecorator(getStory => <DarkView>{getStory()}</DarkView>)
  .add('Pagination', () => (
    <SchedulePagination
      index={1}
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
      onNextTap={() => {}}
    />
  ))
  .add('Item', () => (
    <NavigationItem title="Innovation" position="middle" />
  ));

storiesOf('PersonalSchedule', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <PersonalScheduleButton />
  ));

