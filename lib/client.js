import sanityClient from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient ({
    projectId : '7x1lamey',
    dataset : 'production',
    apiVersion : '2023-05-18',
    useCdn : true,
    token : process.env.SANITY_TOKEN,
    withCredentials: true,
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);