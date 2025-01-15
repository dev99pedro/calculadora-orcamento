import { FunctionComponent, SVGProps } from 'react';

interface ISeal {
  id: number,
  text: string,
  color: string,
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  fontColor: string,
}

export default ISeal;
