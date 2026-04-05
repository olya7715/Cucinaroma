import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
            "linear-gradient(135deg, #0c1420 0%, #203d5f 55%, #f4d16d 120%)",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Cucina Roma
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 78, lineHeight: 1.05 }}>
            Майстер-класи та гастрономічні враження в Римі
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 880,
              fontSize: 32,
              lineHeight: 1.3,
              opacity: 0.92,
            }}
          >
            Україномовні майстер-класи, дегустації та особливі події у серці Рима
          </div>
        </div>
      </div>
    ),
    size,
  );
}
