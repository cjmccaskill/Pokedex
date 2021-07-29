import React from "react";
import OnePokemon from "../components/OnePokemon";

const MyTeam = (props) => {
  return (
    <div className="team-container">
      {props.team.map((member) => (
        <OnePokemon
          selected={member}
          key={member.id}
          handleClick={props.remove}
          label="Release"
        />
      ))}
    </div>
  );
};
export default MyTeam;
