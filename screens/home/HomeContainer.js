import React from 'react';
import Swiper from 'react-native-swiper';
import HomeScreen from './HomeScreen';
import sessions from '../../assets/sessions.json';
import tracks from '../../assets/tracks.json';

const HomeContainer = () => (
  <Swiper showsButtons={false} loop={false} showsPagination={false} removeClippedSubviews={false} >
    {
      tracks.map(t => (
        <HomeScreen key={t.id} trackName={t.title} trackId={t.id} sessions={sessions} />
      ))
    }
  </Swiper>
);

export default HomeContainer;
