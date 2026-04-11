"use client";

import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import { faqItems } from "@/data/faq";
import { trackClarityEvent } from "@/utils/clarity";

function FaqSection() {
  return (
    <section className="py-10 xl:py-20" aria-labelledby="faq-title">
      <Container>
        <SubtitlePoint text="поширені запитання" />
        <TitleSection id="faq-title" title="FAQ" className="mb-7 mt-6" />
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="rounded-3xl border border-grey_stroke_logo/30 bg-white p-6"
              onToggle={(event) => {
                if (event.currentTarget.open) {
                  trackClarityEvent(`faq_home_open_${index + 1}`);
                }
              }}
            >
              <summary className="textH4 cursor-pointer list-none text-main_blue">
                {item.question}
              </summary>
              <p className="mt-3 text-text">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
