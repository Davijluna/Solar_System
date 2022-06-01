import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="blocos">
          { missions.map((mission) => (<MissionCard
            name={ mission.name }
            key={ mission.name }
            country={ mission.country }
            year={ mission.year }
            destination={ mission.destination }
          />)) }
        </div>
      </div>

    );
  }
}
export default Missions;
