const stats = [
  { number: "2M+", title: "Research Papers" },
  { number: "25K+", title: "Researchers" },
  { number: "98%", title: "Search Accuracy" },
  { number: "24/7", title: "AI Assistance" },
];

function Stats() {
  return (
    <section
      style={{
        background: "#020617",
        padding: "80px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "18px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#3B82F6",
                fontSize: "42px",
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                color: "#CBD5E1",
                marginTop: "15px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;