import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Demilade Bickersteth — AI Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Subtle top-right accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-left content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <p
            style={{
              color: "#404040",
              fontSize: "18px",
              fontFamily: "monospace",
              letterSpacing: "4px",
              textTransform: "uppercase",
              margin: "0 0 20px 0",
            }}
          >
            AI Automation Engineer
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "80px",
              fontWeight: 700,
              letterSpacing: "-3px",
              margin: "0 0 28px 0",
              lineHeight: 1,
            }}
          >
            Demilade Bickersteth
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            <p
              style={{
                color: "#404040",
                fontSize: "20px",
                margin: 0,
                fontFamily: "monospace",
              }}
            >
              Available for work · pruun.xyz
            </p>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
