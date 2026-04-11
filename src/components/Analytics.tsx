"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import { grantClarityConsent, initClarity } from "@/utils/clarity";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const cookiesStorageKey = "isCookiesAccepted";
const cookiesAcceptedValue = "CookiesAccepted";

export function Analytics() {
  useEffect(() => {
    initClarity();

    if (localStorage.getItem(cookiesStorageKey) === cookiesAcceptedValue) {
      grantClarityConsent();
    }
  }, []);

  if (!measurementId) {
    return null;
  }

  return <GoogleAnalytics gaId={measurementId} />;
}
