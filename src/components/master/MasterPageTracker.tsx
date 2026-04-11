"use client";

import { useEffect } from "react";
import { setClarityTag, trackClarityEvent } from "@/utils/clarity";

type Props = {
  page: string;
  title: string;
};

function MasterPageTracker({ page, title }: Props) {
  useEffect(() => {
    setClarityTag("master_page", page);
    setClarityTag("master_title", title);
    trackClarityEvent(`master_page_view_${page}`);
  }, [page, title]);

  return null;
}

export default MasterPageTracker;
