import React from "react"

interface Props {
    children ?: React.ReactNode
}

export default function SectionContainer({children}: Props): React.ReactNode {
    return (
        <div className="max-w-3xl px-4 sm:ml-24 md:ml-36 lg:ml-36 lg:mx-auto justify-self-center sm:px-6 xl:max-w-6xl">{children}</div>
    )
}