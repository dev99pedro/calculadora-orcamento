import styled from 'styled-components';
import ModulesSelected from '../molecules/ModulesSelected';

const DivModal = styled.div`
border-radius: 20px;
background: #F5F5F5;
padding: 30px;
`;

function Modal(): JSX.Element {
  return (
    <DivModal>
      <ModulesSelected />
    </DivModal>
  );
}

export default Modal;
