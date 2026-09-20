import { ImageResponse } from "next/og";
import { site } from "@/data/relationship";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#240d16",
          color: "#e6b7ae",
          fontSize: 30,
        }}
      >
        {site.iconInitials}
      </div>
    ),
    size,
  );
}
