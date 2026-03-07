import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
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
          background: "linear-gradient(135deg, #141414 0%, #0a0a0a 100%)",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 1,
          }}
        >
          <span
            style={{
              color: "#ededed",
              fontSize: 20,
              fontWeight: 800,
              fontFamily: "sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            d
          </span>
          <span
            style={{
              color: "#555",
              fontSize: 20,
              fontWeight: 800,
              fontFamily: "sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            b
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
