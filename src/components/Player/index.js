import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlayerActions from '../../store/ducks/player';
import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon,
} from './styles';

export default function Player() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const currentEpisode = useSelector((state) => {
    if (state.player.podcast) {
      return state.player.podcast.tracks.find((episode) => episode.id === state.player.current);
    }
    return null;
  });

  if (!player.current) {
    return null;
  }

  return (
    <Container>
      <CoverBackground source={{ uri: currentEpisode.artwork }} />
      <EpisodeInfo>
        <Title>{currentEpisode.title}</Title>
        <Author>{currentEpisode.artist}</Author>
      </EpisodeInfo>
      <Controls>
        <ControlButton>
          <ControlIcon name="skip-previous" />
        </ControlButton>
        <ControlButton
          onPress={
            player.playing
              ? () => dispatch(PlayerActions.pause())
              : () => dispatch(PlayerActions.play())
          }
        >
          <ControlIcon name={player.playing ? 'pause-circle-filled' : 'play-circle-filled'} />
        </ControlButton>
        <ControlButton>
          <ControlIcon name="skip-next" />
        </ControlButton>
      </Controls>
    </Container>
  );
}
