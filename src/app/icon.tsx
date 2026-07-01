import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 8,
          background: "#146c5c",
          color: "#f8fffc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial",
          fontSize: 16,
          fontWeight: 800,
        }}
      >
        PF
      </div>
    ),
    size,
  );
}
