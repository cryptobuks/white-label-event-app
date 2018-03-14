import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './HomeScreen';
import PersonalScheduleButton from '../../components/personalScheduleButton';
import SchedulePagination from '../../components/schedulePagination';
import sessions from '../../assets/sessions.json';
import tracks from '../../assets/tracks.json';
import { sortByDate } from '../../utils/sort';
import { PERSONAL_SCHEDULE } from '../../config/screenIds';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class HomeContainer extends Component {
  get trackSessions() {
    return tracks.map((track) => {
      const trackSessions = sessions.filter(session => (
        session.tags.some(sessionTrack => sessionTrack.id === track.id)
      ));
      const sortedTrackSessions = sortByDate(trackSessions);
      return {
        id: track.id,
        tracks: [...sortedTrackSessions],
      };
    });
  }

  handleTouchableTap = (destination, total, index) => {
    if (index + destination >= 0 && index + destination < total) this.swiperRef.scrollBy(destination, true);
  }

  handleScheduleButtonPress = () => {
    this.props.navigation.navigate(PERSONAL_SCHEDULE);
  }

  render() {
    return (
      <View style={styles.container}>
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
            tracks.map((track, i) => {
              const currTrackSessions = this.trackSessions.find(currTrack => track.id === currTrack.id);
              return <HomeScreen key={track.id} trackName={track.title} trackId={track.id} sessions={currTrackSessions.tracks} />;
            })
          }
        </Swiper>
        <PersonalScheduleButton handleScheduleButtonPress={this.handleScheduleButtonPress} />
      </View>
    );
  }
}
