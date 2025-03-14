


import { Callout } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'
import { IoInformationSharp } from 'react-icons/io5'


const ErrorMessage = ({children}:PropsWithChildren) => {

  return (
    <div>
        <Callout.Root size={'1'}>
            <Callout.Icon>
                <IoInformationSharp />
            </Callout.Icon>
            <Callout.Text>
                {children}
            </Callout.Text>
        </Callout.Root>
    </div>
  )
}

export default ErrorMessage