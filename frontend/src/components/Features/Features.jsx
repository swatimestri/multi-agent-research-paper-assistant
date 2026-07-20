const features = [
  {
    icon: "🔍",
    title: "Semantic Search",
    desc: "Find research papers using meaning instead of only keywords."
  },
  {
    icon: "🤖",
    title: "AI Summarization",
    desc: "Generate concise summaries from long research papers instantly."
  },
  {
    icon: "📊",
    title: "Trend Analysis",
    desc: "Visualize research trends across years using interactive charts."
  },
  {
    icon: "🧠",
    title: "Research Gap Detection",
    desc: "Discover unexplored research opportunities using AI."
  },
  {
    icon: "📑",
    title: "Paper Comparison",
    desc: "Compare multiple research papers side-by-side."
  },
  {
    icon: "⚡",
    title: "Multi-Agent AI",
    desc: "Coordinator Agent manages Search, Summary and Analysis Agents."
  }
];

function Features() {
  return (
    <section
      style={{
        padding: "100px 40px",
        background: "#020617",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "50px",
          marginBottom: "20px"
        }}
      >
        Why Choose ResearchMind AI?
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94A3B8",
          marginBottom: "60px",
          fontSize: "20px"
        }}
      >
        One platform for intelligent research and paper analysis.
      </p>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px"
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,.05)",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,.08)",
              transition: ".3s"
            }}
          >
            <div style={{ fontSize: "55px" }}>
              {item.icon}
            </div>

            <h2
              style={{
                color: "white",
                marginTop: "25px"
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#94A3B8",
                marginTop: "20px",
                lineHeight: "1.8"
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;