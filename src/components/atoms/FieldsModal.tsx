import styled from 'styled-components';

const StyledFieldsModal = styled.div<{ isModalOpen: boolean }>`
  color: #515151;
  font-size: 14px;
  background-color: #EBEBEB;
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
  width: 340px;
  position: absolute;
  background: #515151;
  color: #ffffff;
  min-height: 65px;
  border-radius: 20px;
  flex-wrap: wrap; /* Permite quebra de linha */
  align-items: flex-start;
  width: 340px;
  gap: 10px;
`;

const StyledField = styled.div`
  min-width: 99px;
`;

interface FieldsModalProps {
  fields: string[],
  isModalOpen: boolean,
}

function FieldsModal({ fields, isModalOpen }: FieldsModalProps): JSX.Element {
  return (
    <StyledFieldsModal isModalOpen={isModalOpen}>
      {fields.map((field) => (
        <StyledField key={field}>
          {field}
        </StyledField>
      ))}
    </StyledFieldsModal>
  );
}

export default FieldsModal;
