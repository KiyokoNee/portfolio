import {siteMeta} from "./siteMeta.ts";

type SEOConfig = {
    title: string;
    description: string;
    ogImage?: string;
    siteUrl: string;
    author: string;
}

export const seoConfig:SEOConfig = {
    title: `${siteMeta.handle} | Developer Portfolio`,
    description: siteMeta.tagline,
    siteUrl: `https://${siteMeta.domain}`,
    author: siteMeta.showFullName ? siteMeta.fullName : siteMeta.handle
}