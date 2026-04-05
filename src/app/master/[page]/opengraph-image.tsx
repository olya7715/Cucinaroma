import { ImageResponse } from "next/og";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { DataCardMaster } from "@/data/dataMaster";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ page: Pick<DataCardMaster, "page">["page"] }>;
}) {
  const { page } = await params;
  const details = dataDetailInfoMaster[page];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #0c1420 0%, #19324c 55%, #f4d16d 120%)",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Cucina Roma</span>
          <span>{details.subtitle}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", maxWidth: 920, fontSize: 74, lineHeight: 1.05 }}>
            {details.title}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 30,
              lineHeight: 1.3,
              opacity: 0.92,
            }}
          >
            {details.describe[0]}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
