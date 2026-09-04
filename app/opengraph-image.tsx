import { ImageResponse } from "next/og";

export const alt = "5 Years of Adarsh and Uma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#240d16",
          color: "#f5e8d8",
          padding: "58px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: 500,
            right: -80,
            top: -180,
            background: "rgba(215,173,105,.18)",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(245,232,216,.35)",
            width: "100%",
            height: "100%",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 8, color: "#d7ad69" }}>
            23 · SEPTEMBER · 2026
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 86, lineHeight: 1.02, letterSpacing: -3 }}>5 Years of Us</div>
            <div style={{ marginTop: 22, fontSize: 30, color: "#e6b7ae" }}>Adarsh × Uma</div>
          </div>
          <div style={{ display: "flex", fontSize: 22 }}>Still choosing you. Every single time.</div>
        </div>
      </div>
    ),
    size,
  );
}
