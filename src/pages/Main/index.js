import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Podcastlist,
  PageTitle,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
} from './styles';

import PodcastActions from '../../store/ducks/podcast';

function Main({ navigation }) {
  const dispacth = useDispatch();
  const podcasts = useSelector((state) => state.podcast.data);

  useEffect(() => {
    dispacth(PodcastActions.loadRequest());
  }, []);

  const handlePodcastPress = (podcast) => {
    navigation.navigate('Podcast', { podcast });
  };

  return (
    <Container>
      <Podcastlist
        ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
        data={podcasts}
        keyExtractor={(podcast) => String(podcast.id)}
        renderItem={({ item: podcast }) => (
          <Podcast onPress={() => handlePodcastPress(podcast)}>
            <Cover source={{ uri: podcast.cover }} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episódios`}</Count>
            </Info>
          </Podcast>
        )}
      />
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
