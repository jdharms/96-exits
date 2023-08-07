import NextImage, { ImageProps } from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import React from "react"

function getFigure(props: ImageProps) {
  return (
    <>
    <div className="flex justify-center">
    <figure >
    <NextImage className="shadow-xl" {...props} />
    <figcaption className="text-center">{props.title}</figcaption>
    </figure>
    </div>
    </>
  )
}

const components = {
    // Image,
    Image: (props: ImageProps) => (
      (props.title !== "") ?
      getFigure(props)
      :
      <NextImage {...props} />
    ),
  }

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components}/>
}