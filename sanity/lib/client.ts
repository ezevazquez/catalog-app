/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

