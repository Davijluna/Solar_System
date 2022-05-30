import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((mission) => (<MissionCard
          name={ mission.name }
          key={ mission.name }
          country={ mission.country }
          year={ mission.year }
          destination={ mission.destination }
        />)) }
      </div>

    );
  }
}
export default Missions;
