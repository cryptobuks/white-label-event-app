import React from 'react';
import Swiper from 'react-native-swiper';
import HomeScreen from './HomeScreen';
import SchedulePagination from '../../components/schedulePagination';
import sessions from '../../assets/sessions.json';
import tracks from '../../assets/tracks.json';

const HomeContainer = () => (
  <Swiper
    showsButtons={false}
    loop={false}
    removeClippedSubviews={false}
    renderPagination={
      (i, t) => (
        <SchedulePagination
          index={i}
          total={t}
          tracks={tracks}
        />
      )
    }
  >
    {
      tracks.map((t) => {
        const trackSessions = sessions.filter(s => (
          s.tags.some(st => st.id === t.id)
        ));
        return <HomeScreen key={t.id} trackName={t.title} trackId={t.id} sessions={trackSessions} />;
      })
    }
  </Swiper>
);

export default HomeContainer;
