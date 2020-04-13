import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PlayerActions from '../../store/ducks/player';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
  BackButton,

} from './styles';

function Podcast({ route, navigation }) {
  const { podcast } = route.params;
  const dispatch = useDispatch();

  const handleBack = () => {
    navigation.goBack();
  };

  const handlePlay = (episodeId) => {
    dispatch(PlayerActions.setPodcastRequest(podcast, episodeId));
  };

  return (
    <Container>
      <EpisodeList
        ListHeaderComponent={() => (
          <PodcastDetails>
            <Background source={{ uri: podcast.cover }} blurRadius={5} />
            <BackButton onPress={handleBack}>
              <Icon name="arrow-back" size={25} color="#FFF" />
            </BackButton>
            <Cover source={{ uri: podcast.cover }} />
            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PlayButton onPress={() => handlePlay()}>
              <PlayButtonText>REPRODUZIR</PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={(episode) => String(episode.id)}
        renderItem={({ item: episode }) => (
          <Episode onPress={() => handlePlay(episode.id)}>
            <Title>{episode.title}</Title>
            <Author>{episode.artist}</Author>
          </Episode>
        )}
      />
    </Container>
  );
}

Podcast.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape().isRequired,
};

export default Podcast;
