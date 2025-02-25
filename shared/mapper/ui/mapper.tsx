import React, { ReactNode } from "react";

 interface MapperProps<T>{
  data: T[],
  children: (item: T, index: number) => ReactNode;
  className?: string; 
 }

export default function Mapper<T>({children, data, ...props}:MapperProps<T>) {
    if (!data) return null;

  return (
    <div {...props}>
        {data.map((item, index) => (
            children(item, index)
        ))}
    </div>
  )
}
