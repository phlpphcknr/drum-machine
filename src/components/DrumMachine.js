import styled from 'styled-components/macro';
import Display from "./Display";
import PadBoard from "./PadBoard";
import {useState} from "react";

export default function DrumMachine () {

    const [displayText, setDisplayText] = useState("test");
    
    return (
        <DrumMachineContainer id="drum-machine">
            <p>Drum Machine</p>
            <Display displayText={displayText}/>
            <PadBoard setSoundName={setDisplayText}/>
        </DrumMachineContainer>
    )
}

const DrumMachineContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--black);
    padding: 10px;
    margin: 10px;
`


