import NextImage, { ImageProps } from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { FunctionComponent, MDXComponents } from "mdx/types"
import React from "react"

const components = {
    // Image,
    Image: (props: ImageProps) => <NextImage {...props} />,
  }

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components}/>
}