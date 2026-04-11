"use client";

import { trackClarityEvent } from "@/utils/clarity";

type Props = {
  question: string;
  answer: string;
  eventName: string;
};

function FaqTrackingDetails({ question, answer, eventName }: Props) {
  return (
    <details
      onToggle={(event) => {
        if (event.currentTarget.open) {
          trackClarityEvent(eventName);
        }
      }}
    >
      <summary className="cursor-pointer list-none font-medium text-main_blue">
        {question}
      </summary>
      <p className="mt-2 text-text">{answer}</p>
    </details>
  );
}

export default FaqTrackingDetails;
