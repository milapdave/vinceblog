import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)} className="text-base font-medium">
            {blok.name}
    </Link>
)
export default MenuLink