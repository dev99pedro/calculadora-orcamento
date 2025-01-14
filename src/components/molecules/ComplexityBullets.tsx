import styled from 'styled-components';
import IComplexityBullets from '../../interfaces/IComplexityBullets';

const ListBullets = styled.ul`
display: inline-flex;
gap: 2px;
margin: 0;
padding: 0;
`;

const ItemBullet = styled.li`
width: 10px;
height: 10px;
color: transparent;
list-style: none;
border-radius: 50%;
font-size: 0;
`;

const quantityBullets = 3;

function ComplexityBullets(
  { highlightBullets, highlightColor }: IComplexityBullets,
): JSX.Element {
  const maxBullets = Math.min(highlightBullets, quantityBullets);
  return (
    <ListBullets>
      {Array.from({ length: quantityBullets }, (_, index) => {
        const isHighlightBullet = index < maxBullets;
        return (
          <ItemBullet key={index} style={{ backgroundColor: isHighlightBullet ? highlightColor : '#D9D9D9' }} />
        );
      })}
    </ListBullets>
  );
}

export default ComplexityBullets;
