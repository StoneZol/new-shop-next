import React,{ ReactNode } from 'react'
import Mapper from '@/shared/mapper/ui/mapper'
import VariableGroups from '@/shared/variable-groups/ui/variable-groups'

interface VariableGroupsRenderProps<T>{
  data: T[],
  render: (item: T, index: number) => ReactNode,
  texts: {
    link: string,
    h3: string,
  }
  links: string,
  anyGroupStyle?: string,
  listClass?: string, 
}

export default function VariableGroupsRender<T>({data, render,texts, links, anyGroupStyle='', listClass='', ...props}:VariableGroupsRenderProps<T>) {
  return (
    <VariableGroups anyStyle={anyGroupStyle} texts={texts} links={links}{...props}>
        <Mapper data={data} className={listClass}>
            {render}
        </Mapper>
    </VariableGroups>
  )
}