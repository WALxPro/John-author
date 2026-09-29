import { useEffect } from "react";
import { SITE } from "@/config/site";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.author}` : `${SITE.author} | ${SITE.bookTitle}`;
  }, [title]);
}
