import React from 'react';
import Swiper from 'react-native-swiper';
import HomeScreen from './HomeScreen';
import SchedulePagination from '../../components/schedulePagination';
import sessions from '../../assets/sessions.json';
import tracks from '../../assets/tracks.json';

const HomeContainer = () => {
  let swiper;

  const handleTouchableTap = (destination, total, index) => {
    if (index + destination >= 0 && index + destination < total) swiper.scrollBy(destination, true);
  };

  return (
    <Swiper
      showsButtons={false}
      loop={false}
      removeClippedSubviews={false}
      ref={($el) => { swiper = $el; }}
      renderPagination={
        (i, t) => (
          <SchedulePagination
            index={i}
            total={t}
            tracks={tracks}
            onNextTap={handleTouchableTap}
          />
        )
      }
    >
      {
        tracks.map((t) => {
          const trackSessions = sessions.filter(s => (
            s.tags.some(st => st.id === t.id)
          ));
          const sortedSessions = trackSessions.sort((a, b) => new Date(a.date) - new Date(b.date));
          return <HomeScreen key={t.id} trackName={t.title} trackId={t.id} sessions={sortedSessions} />;
        })
      }
    </Swiper>
  );
};

export default HomeContainer;
