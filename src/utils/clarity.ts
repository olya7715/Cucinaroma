"use client";

import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "w9zhn87ob5";

export function initClarity() {
  Clarity.init(CLARITY_PROJECT_ID);
}

export function trackClarityEvent(eventName: string) {
  Clarity.event(eventName);
}

export function setClarityTag(key: string, value: string) {
  Clarity.setTag(key, value);
}

export function grantClarityConsent() {
  Clarity.consentV2({
    ad_Storage: "denied",
    analytics_Storage: "granted",
  });
}
