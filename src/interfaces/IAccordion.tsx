import { ReactNode } from "react";

interface IAccordion {
    quantity: number,
    title: string,
    children: ReactNode;
}

export default IAccordion;
