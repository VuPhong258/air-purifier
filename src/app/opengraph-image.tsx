import { ImageResponse } from "next/og";

export const alt = "Pure Flow AI air purifier";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7faf8",
          color: "#10201a",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "58%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: "#146c5c",
                color: "#f8fffc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              PF
            </div>
            <span style={{ fontSize: 34, fontWeight: 700 }}>Pure Flow</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02 }}>
              Máy lọc không khí AI cho nhà hiện đại
            </div>
            <div style={{ color: "#4f675d", fontSize: 30, lineHeight: 1.4 }}>
              Theo dõi PM2.5, tự động tối ưu công suất lọc và bảo vệ không
              gian sống mỗi ngày.
            </div>
          </div>
          <div style={{ color: "#146c5c", fontSize: 26, fontWeight: 700 }}>
            HEPA H13 - AI Sensor - Quiet Sleep
          </div>
        </div>
        <div
          style={{
            width: "42%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 310,
              height: 430,
              borderRadius: 46,
              background: "#ffffff",
              border: "2px solid #d8e4dd",
              boxShadow: "0 36px 90px rgba(20, 108, 92, 0.22)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 34,
              gap: 26,
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                border: "18px solid #d8f36b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#146c5c",
                fontSize: 34,
                fontWeight: 800,
              }}
            >
              8
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                width: "100%",
              }}
            >
              {[0, 1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  style={{
                    height: 13,
                    borderRadius: 999,
                    background: item % 2 === 0 ? "#d8e4dd" : "#e8f2ed",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                marginTop: "auto",
                width: "82%",
                height: 16,
                borderRadius: 999,
                background: "#146c5c",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
