import styled from 'styled-components';


const StyledText = styled.p`
    font-size: 30px;
    color: red
`

interface AnswerInputTestProps {
    text: string;
}

function AnswerInputTest({ text }: AnswerInputTestProps): JSX.Element {
    return (
        <div>
            <StyledText>{text}</StyledText>
        </div>
    )
}

export default AnswerInputTest;



