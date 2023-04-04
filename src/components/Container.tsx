import classNames from 'classnames'
import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string,
}

function Container({children, className}: Props) {
  return (
    <div className={classNames('px-[1.6rem] py-[1.6rem] max-w-[120rem] mx-auto', className)}>
        {children}
    </div>
  )
}

export default Container