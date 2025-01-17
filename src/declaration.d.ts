declare module '*.jpg'{
  const value: string; // Geralmente retorna uma URL ou caminho
  export default value;
}
declare module '*.png'
declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string;
  export default src;
}
