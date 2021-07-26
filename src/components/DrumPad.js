import styled from 'styled-components/macro';

export default function DrumPad ({shortCut, id, soundUrl, setSoundName}) {

    const playSound = () => {
        var aud = document.getElementById(shortCut);
        aud.play();
        setSoundName(id);
    }

    window.addEventListener('keydown', event => {
        if (event.key === shortCut) {
            playSound();
        }
    })

    return (
        <PadButton onClick={playSound} className={'drum-pad'} id={id}>
            <audio src={soundUrl} className={'clip'} id={shortCut}/>
                {shortCut}
        </PadButton>
    )
}

const PadButton = styled.button`
    height: var(--button-side-length);
    width: var(--button-side-length);
`