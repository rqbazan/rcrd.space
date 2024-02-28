import { useEffect } from "react"
import { mountDomRenderer } from "react-cosmos-dom"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore this is a generated file by cosmos
// eslint-disable-next-line import/no-unresolved
import * as mountArgs from "./imports.gen"

export default function CosmosRoute() {
  useEffect(() => {
    mountDomRenderer(mountArgs)
  }, [])

  return null
}
