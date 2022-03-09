import { useSelector } from "react-redux";
import { useState } from "react";

const PlayerList= () => {
    // getting daa from redux store:
    const temp = useSelector((state:any) => state.players);
    // assign it to state:
    const [players, setPlayers] = useState(temp);
    // log it so we can see:
    console.log(players);

    return (
        <div style = {{color: 'purple'}}>
            This is the player list component
        </div>
    )
}

export default PlayerList;