import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import HomeScreen from './HomeScreen';
import SchedulePagination from '../../components/schedulePagination';
import sessions from '../../assets/sessions.json';
import tracks from '../../assets/tracks.json';
import { SortByDate } from '../../utils/sort';

export default class HomeContainer extends Component {
  get trackSessions() {
    return tracks.map((track) => {
      const trackSessions = sessions.filter(session => (
        session.tags.some(sessionTrack => sessionTrack.id === track.id)
      ));
      return SortByDate(trackSessions);
    });
  }

  handleTouchableTap = (destination, total, index) => {
    if (index + destination >= 0 && index + destination < total) this.swiperRef.scrollBy(destination, true);
  }

  render() {
    return (
      <Swiper
        showsButtons={false}
        loop={false}
        removeClippedSubviews={false}
        ref={(el) => { this.swiperRef = el; }}
        renderPagination={
          (index, total) => (
            <SchedulePagination
              index={index}
              total={total}
              tracks={tracks}
              onNextTap={this.handleTouchableTap}
            />
          )
        }
      >
        {
          tracks.map((track, i) => <HomeScreen key={track.id} trackName={track.title} trackId={track.id} sessions={this.trackSessions[i]} />)
        }
      </Swiper>
    );
  }
}
