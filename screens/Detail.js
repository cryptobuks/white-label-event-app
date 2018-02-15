import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { Button, Badge, Card, List, ListItem, Text } from 'react-native-elements';
import { Header } from '../components';
import { Colors } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: 30,
  },
  card: { flex: 1 },
  innerCard: { marginTop: 50 },
  list: { marginBottom: 20 },
  meta: { marginTop: 10 },
  badge: { margin: 32 },
});

const DetailScreen = ({ navigation: { state: { params }, navigate }, screenProps: { onChangeSubscription, usersPerSchedule, userId } }) => {
  const users = usersPerSchedule[params.scheduleItem.name] || [];
  const isSubscribed = users.indexOf(userId) !== -1;

  return (
    <View style={styles.container}>
      <Card title={params.scheduleItem.name} style={styles.card}>
        <Text>{params.scheduleItem.description}</Text>
        <View style={styles.innerCard}>
          <Text h4>Speakers:</Text>
          <List containerStyle={styles.list}>
            {params.scheduleItem.speakers.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={{ uri: 'http://lorempixel.com/200/200/cats/' }}
                key={l.name}
                title={l.name}
                subtitle={l.company}
                onPress={() => Linking.openURL(`https://twitter.com/${l.contact.twitterHandle}`)}
              />
            ))}
          </List>
        </View>
        <View style={styles.meta}>
          <Text h4>
            When: {params.scheduleItem.schedule.startTime} - {params.scheduleItem.schedule.endTime}
          </Text>
          <Text h4>Where: {params.scheduleItem.location}</Text>
        </View>
      </Card>
      <View>
        <Badge containerStyle={styles.badge}>
          <Text style={{ color: Colors.white }}>{`Attendees:${users.length}`}</Text>
        </Badge>
        {userId ? (
          <Button
            raised
            icon={{ name: 'cached' }}
            title={isSubscribed ? 'Unsubscribe' : 'Subscribe'}
            onPress={() => onChangeSubscription(params.scheduleItem.name)}
          />
        ) : (
          <Button raised title="Login to subscribe" onPress={() => navigate('User')} />
        )}
      </View>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.scheduleItem.name,
  header: <Header navigate={navigation.navigate} goBack={navigation.goBack} />,
});

export default DetailScreen;
