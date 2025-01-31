import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as InfoIcon } from '../../assets/svgs/info.svg';
import FieldsModal from '../atoms/FieldsModal';

const StyledAboutModule = styled.span`
  color: #8E8E8E;
  font-size: 12px;
  display: flex;
  margin-top: 15px;
  gap: 4px;
`;

interface AboutModuleProps {
  fields: string[],
}

function AboutModule({ fields }: AboutModuleProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <StyledAboutModule
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
      >
        <InfoIcon />
        Sobre o Módulo
      </StyledAboutModule>
      <FieldsModal isModalOpen fields={fields} />
    </>
  );
}

export default AboutModule;
