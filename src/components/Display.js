import styled from 'styled-components/macro';

export default function Display({displayText}) {

    return (
        <DisplayContainer id="display">
            {displayText}
        </DisplayContainer>
    )
}

const DisplayContainer = styled.div`
    width: var(--display-width);
    background-color: var(--primary-color-dark);
    color: var(--secondary-color-bright);
    border: 2px solid var(--black);
    text-align: left;
    padding: 10px;
    margin: 10px;
`