import {createClient, groq} from "next-sanity";
import config from "@/sanity/config/client-config";

export const getProjects = async () => {
    return createClient(config).fetch(
        groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      git,
      technology,
      "file": file.asset->url,
      content
    }`
    )
}

export const getSkills = async () => {
    return createClient(config).fetch(
        groq`*[_type == "skills"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "icon": icon.asset->url,
      tech,
      order
    }`
    )
}

export const getEducation = async () => {
    return createClient(config).fetch(
        groq`*[_type == "education"]{
      _id,
      _createdAt,
      course,
      college,
      "slug": slug.current,
      "file": certificate.asset->url,
      start,
      end,
      content,
      order
    }`
    )
}