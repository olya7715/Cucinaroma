import { GoogleAnalytics } from "@next/third-parties/google";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  if (!measurementId) {
    return null;
  }

  return <GoogleAnalytics gaId={measurementId} />;
}
