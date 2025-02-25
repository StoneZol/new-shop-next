import Mapper from '@/shared/mapper/ui/mapper'
import VariableGroups from '@/shared/variable-groups/ui/variable-groups'
import React from 'react'

export default function VariableGroupsRender({data, render,texts, links, anyGroupStyle='', listClass, ...props}) {
  return (
    <VariableGroups anyStyle={anyGroupStyle} texts={texts} links={links}{...props}>
        <Mapper data={data} className={listClass}>
            {render}
        </Mapper>
    </VariableGroups>
  )
}
