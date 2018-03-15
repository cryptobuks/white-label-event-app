import React from 'react';

import { storiesOf } from '@storybook/react-native';
import tracks from '../../assets/tracks.json';
import mockData from '../mockData.json';

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
  SchedulePagination,
  NavigationItem,
  PersonalScheduleButton,
} from './../../components';

storiesOf('ScheduleItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Main', () => (
    <ScheduleItem
      author={mockData.author}
      title={mockData.title}
      location={mockData.location}
      date={Date.now()}
    />
  ))
  .add('Button', () => (
    <ScheduleItemButton />
  ))
  .add('Header', () => (
    <ScheduleItemHeader author={mockData.author.name} title={mockData.title} />
  ))
  .add('Title', () => (
    <Title value={mockData.title} />
  ))
  .add('Label', () => (
    <Label value={mockData.labelValue} color={mockData.labelColor} />
  ))
  .addDecorator(getStory => <CenterView><SmallView>{getStory()}</SmallView></CenterView>)
  .add('Detail', () => (
    <ScheduleItemDetail date={Date.now()} location={mockData.location} />
  ));

storiesOf('ScheduleNavigation', module)
  .addDecorator(getStory => <DarkView>{getStory()}</DarkView>)
  .add('Pagination', () => (
    <SchedulePagination
      index={0}
      total={5}
      tracks={tracks}
      onNextTap={() => {}}
    />
  ))
  .add('Item', () => (
    <NavigationItem title={tracks[0].title} position="middle" />
  ));

storiesOf('PersonalSchedule', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <PersonalScheduleButton />
  ));

