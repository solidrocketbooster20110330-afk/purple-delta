export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#05071f 0%,#0c1037 100%)",
        color: "white",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "38px", margin: 0, color: "#a855f7" }}>
        🟣 PurpleDelta
      </h1>

      <p style={{ color: "#a9adff", marginTop: "6px" }}>
        Formula 1 Dashboard
      </p>

      <div
        style={{
          background: "#131942",
          border: "1px solid #2b347a",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            color: "#a9adff",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          ROUND 16
        </div>

        <h2 style={{ margin: "8px 0 6px" }}>
          🇦🇿 Azerbaijan Grand Prix
        </h2>

        <div style={{ color: "#c7cbff" }}>
          September 24–26
        </div>
      </div>

      <section
        style={{
          background: "#131942",
          border: "1px solid #2b347a",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Latest News</h2>

        {[
          "Antonelli wins Spanish GP",
          "Mercedes extends championship lead",
          "Azerbaijan GP Preview",
          "Verstappen reacts to title battle",
          "Latest paddock updates",
        ].map((news) => (
          <div
            key={news}
            style={{
              padding: "12px 0",
              borderBottom: "1px solid #2b347a",
            }}
          >
            {news}
          </div>
        ))}
      </section>
    </main>
  );
}
