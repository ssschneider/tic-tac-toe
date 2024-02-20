import { useState } from "react";

export function Player({ playerName, symbol, isActive }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ name, setName ] = useState("");

    function handleEditing () {
        setIsEditing(isEditing => !isEditing);
    };

    function handleSettingPlayerName (event) {
        setName(event.target.value);
    };

	return (
		<li className={isActive ? "active" : null} >
			<span className="player">
                {isEditing ? 
                    <input type="text" onChange={handleSettingPlayerName} value={name} placeholder={name === "" ? playerName : name} /> : 
                    <span className="player-name">{name === "" ? playerName : name}</span>
                } 
				<span className="player-symbol">{symbol}</span>
			</span>
            <button onClick={handleEditing}>
                {isEditing ? "Save" : "Edit"}
            </button>	
		</li>
	);
}
