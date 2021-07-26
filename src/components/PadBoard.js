import styled from 'styled-components/macro';
import DrumPad from "./DrumPad";

export default function PadBoard({setSoundName}) {

    return (
        <PadBoardContainer>
            <DrumPad 
                shortCut = "Q"
                id="sound1"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"/>
            <DrumPad 
                shortCut = "W" 
                id="sound2"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"/>
            <DrumPad 
                shortCut = "E" 
                id="sound3"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"/>
            <DrumPad 
                shortCut = "A" 
                id="sound4"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"/>
            <DrumPad 
                shortCut = "S" 
                id="sound5"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"/>
            <DrumPad 
                shortCut = "D" 
                id="sound6"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"/>
            <DrumPad 
                shortCut = "Z" 
                id="sound7"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"/>
            <DrumPad 
                shortCut = "X" 
                id="sound8"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"/>
            <DrumPad 
                shortCut = "C" 
                id="sound9"
                setSoundName={setSoundName}
                soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"/>
        </PadBoardContainer>
    )
}

const PadBoardContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`