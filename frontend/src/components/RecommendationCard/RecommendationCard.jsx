function RecommendationCard({ topics }) {
  if (!topics || topics.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "50px",
        background: "rgba(17,24,39,0.8)",
        borderRadius: "18px",
        padding: "30px",
        border: "1px solid rgba(96,165,250,0.25)",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "25px",
        }}
      >
        🔥 Recommended Topics
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {topics.map((topic, index) => (
          <div
            key={index}
            style={{
              background: "#2563EB",
              color: "white",
              padding: "12px 20px",
              borderRadius: "30px",
              fontWeight: "600",
            }}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationCard;