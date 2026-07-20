function PaperCard({ paper }) {
  return (
    <div
      style={{
        background: "rgba(17,24,39,0.8)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(96,165,250,0.25)",
        borderRadius: "18px",
        padding: "28px",
        marginBottom: "28px",
        color: "white",
        boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 15px 40px rgba(59,130,246,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 8px 30px rgba(0,0,0,0.35)";
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "#60A5FA",
          marginBottom: "18px",
          fontSize: "28px",
          lineHeight: "1.4",
        }}
      >
        📄 {paper.title}
      </h2>

      {/* Authors */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "12px",
          color: "#CBD5E1",
        }}
      >
        <span style={{ fontSize: "20px", marginRight: "10px" }}>👨‍💻</span>

        <span>
          <strong style={{ color: "white" }}>Authors:</strong>{" "}
          {Array.isArray(paper.authors)
            ? paper.authors.join(", ")
            : paper.authors}
        </span>
      </div>

      {/* Year */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "18px",
          color: "#CBD5E1",
        }}
      >
        <span style={{ fontSize: "18px", marginRight: "10px" }}>📅</span>

        <span>
          <strong style={{ color: "white" }}>Published:</strong> {paper.year}
        </span>
      </div>

      {/* AI Summary */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          borderLeft: "4px solid #3B82F6",
          padding: "18px",
          borderRadius: "10px",
          marginBottom: "22px",
        }}
      >
        <h3
          style={{
            color: "#60A5FA",
            marginBottom: "10px",
            fontSize: "18px",
          }}
        >
          🤖 AI Summary
        </h3>

        <p
          style={{
            color: "#CBD5E1",
            lineHeight: "1.8",
            fontSize: "16px",
          }}
        >
          {paper.summary}
        </p>
      </div>

      {/* Button */}
      <a
        href={paper.url}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 22px",
          background: "#3B82F6",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "600",
          transition: "0.3s",
        }}
      >
        📖 Read Full Paper →
      </a>
    </div>
  );
}

export default PaperCard;