export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f23",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#a855f7" }}>🟣 PurpleDelta</h1>

      <div
        style={{
          background: "#1a1a3a",
          borderRadius: "16px",
          padding: "16px",
          marginTop: "20px",
        }}
      >
        <h2>R16</h2>
        <h3>🇦🇿 Azerbaijan Grand Prix</h3>
        <p>9월 24일 ~ 26일</p>
      </div>

      <h2 style={{ marginTop: "30px" }}>최신 뉴스</h2>

      <ul>
        <li>Antonelli wins Spanish GP</li>
        <li>Mercedes extends championship lead</li>
        <li>Azerbaijan GP Preview</li>
        <li>Verstappen reacts to title battle</li>
        <li>Latest paddock updates</li>
      </ul>
    </main>
  );
}
