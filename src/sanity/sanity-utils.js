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
      url,
      phone,
      tablet,
      pc,
      order,
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

export const getPage = async (slug) => {
    return createClient(config).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      pageName,
      "slug": slug.current,
      "image": image.asset->url,
      "file": file.asset->url + "?dl",
      title,
      content,
    }`,{slug}
    )
}