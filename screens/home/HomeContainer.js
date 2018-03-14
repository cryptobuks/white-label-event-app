import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import HomeScreen from './HomeScreen';
import SchedulePagination from '../../components/schedulePagination';
import events from '../../assets/events.json';
import tracks from '../../assets/tracks.json';
import { sortByDate } from '../../utils/sort';

export default class HomeContainer extends Component {
  get trackSessions() {
    return tracks.map((track) => {
      const trackSessions = events.filter(session =>
        session.tags.some(sessionTrack => sessionTrack.id === track.id),
      );
      return sortByDate(trackSessions);
    });
  }

  handleTouchableTap = (destination, total, index) => {
    if (index + destination >= 0 && index + destination < total) {
      this.swiperRef.scrollBy(destination, true);
    }
  };

  render() {
    return (
      <Swiper
        showsButtons={false}
        loop={false}
        removeClippedSubviews={false}
        ref={(el) => {
          this.swiperRef = el;
        }}
        renderPagination={(index, total) => (
          <SchedulePagination
            index={index}
            total={total}
            tracks={tracks}
            onNextTap={this.handleTouchableTap}
          />
        )}
      >
        {tracks.map((track, i) => (
          <HomeScreen
            key={track.id}
            trackName={track.title}
            trackId={track.id}
            events={this.trackSessions[i]}
          />
        ))}
      </Swiper>
    );
  }
}
