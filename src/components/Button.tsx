import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

interface Props extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode,
    onClick?: ()=>void,

}

const buttonClasses = cva("px-[1.6rem] py-[.8rem] rounded-xl flex justify-center items-center gap-[.8rem]", {
    variants: {
        variant: {
            primary: "bg-primary hover:bg-green-700 text-white",
            secondary: "bg-my-gray-100 hover:bg-gray-300 text-my-gray-400",
            dropdown: "px-[.4rem] py-[.4rem] text-my-gray-400 hover:text-gray-700",
        },
        size: {
            small: "text-sm md:text-xl",
            medium: "text-md md:text-xl",
            large: "",
        },
        align: {
            center: "self-center",
            start: 'self-start',
            stretch: ""
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
        align: "center"
    }
})

function Button({children, onClick, variant, size, align}: Props) {
  return (
    <div role="button" onClick={onClick} className={buttonClasses({variant, size, align}) }>{children}</div>
  )
}

export default Button