import { useState } from "react";
import { useDispatch } from "react-redux";

const AddPlayer = () => {
    const dispatch = useDispatch();
    // This component should have some input fields that take in:
    // name, email, points, and numWins
    // try to store them in a state

    const [player, setPlayer] = useState({
        id: '',
        name: 'new name',
        email: 'new@mail.com',
        score: 0,
        numWins: 0
    })

    // manually update the state
    const onChangeHandler = (event:any) => {
        setPlayer({
          ...player,  
          [event.target.name]: event.target.value,
        })
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();
        dispatch( {type: 'ADD', payload: player});
    }

    return(
        <div>
            <form onSubmit = {onSubmitHandler}>
                <input name = 'name' type = 'text' value = {player.name} onChange = {onChangeHandler}></input>
                < br/>
                <input name = 'email' type = 'email' value = {player.email} onChange = {onChangeHandler}></input>
                < br/>
                <input name = 'score' type = 'number' value = {player.score} onChange = {onChangeHandler}></input>
                < br/>
                <input name = 'numWins' type = 'number' value = {player.numWins} onChange = {onChangeHandler}></input>
                < br/>
                <input className = 'btn btn-primary' type = 'submit' value = 'Add Player'/>
            </form>
            <div>
                <h1>Preview</h1>
                <h1>{player.name}</h1>
                <h1>{player.email}</h1>
                <h3>{player.score}</h3>
                <h3>{player.numWins}</h3>
            </div>
        </div>
    )
}

export default AddPlayer;