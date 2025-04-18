import React, { ReactNode } from "react";
import Link from 'next/link'
import styles from './variable-groups.module.scss'

 interface VariableGroupsProps{
  children: ReactNode
  texts: {
    link: string,
    h3: string,
  }
  links: string,
  anyStyle?: string | undefined
 }

 export default function VariableGroups({children, texts, links, anyStyle= ''}: VariableGroupsProps) {
  if (!children || !texts || !links) return null
return(
  <section className={`${styles.section} ${anyStyle}`}>
      <div className={styles.header_section}>
          <h3>{texts.h3}</h3>
          <Link className={styles.link} href={links}>{texts.link}</Link>
      </div>
      {children}
      <div className={styles.show_link}>
          <Link className={styles.link_button} href={links}>{texts.link}</Link>
      </div>
  </section>
)
}