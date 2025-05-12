import { useState } from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
 display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledInput = styled.input`
 padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

interface TextInputWithLabelProps {
    label: string;
    value: string;
    onChange: (value: string) => void;

}

function TextInputWithLabel({ label, value, onChange }: TextInputWithLabelProps): JSX.Element {


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);

    };

    return (
        <StyledInputWrapper>
            <StyledInput
                type='text'
                value={value}
                onChange={handleInputChange}
                placeholder={`Digite ${label.toLowerCase()}`}
            />
        </StyledInputWrapper>
    );
}

export default TextInputWithLabel;