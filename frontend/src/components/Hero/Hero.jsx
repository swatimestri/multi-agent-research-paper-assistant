import { useState } from "react";
import API from "../../services/api";
import PaperCard from "../PaperCard/PaperCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import TrendChart from "../TrendChart/TrendChart";
import ResearchGapCard from "../ResearchGapCard/ResearchGapCard";

function Hero() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a research topic.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post(
  "/research/",
  null,
  {
    params: {
      query,
    },
  }
);

console.log("Response:", response.data);
console.log("Papers:", response.data.papers);
console.log("First Paper:", response.data.papers[0]);

setResult(response.data);

    } catch (err) {
      console.error(err);
      alert("Backend connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top,#1E3A8A 0%,#020617 40%,#020617 100%)",
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: "absolute",
            width: "450px",
            height: "450px",
            background: "#3B82F6",
            filter: "blur(180px)",
            opacity: 0.2,
            borderRadius: "50%",
            top: "-120px",
            left: "-120px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "#8B5CF6",
            filter: "blur(180px)",
            opacity: 0.15,
            borderRadius: "50%",
            right: "-100px",
            bottom: "-100px",
          }}
        />

        <div
          style={{
            textAlign: "center",
            maxWidth: "900px",
            zIndex: 10,
          }}
        >
          <h4
            style={{
              color: "#60A5FA",
              letterSpacing: "3px",
            }}
          >
            AI POWERED RESEARCH ASSISTANT
          </h4>

          <h1
            style={{
              fontSize: "78px",
              color: "white",
              fontWeight: "800",
              marginTop: "20px",
              lineHeight: "1.1",
            }}
          >
            Search Smarter.
            <br />
            Research Faster.
          </h1>

          <p
            style={{
              color: "#94A3B8",
              marginTop: "35px",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            Search millions of research papers,
            generate AI summaries,
            compare publications,
            identify research gaps,
            and analyze research trends.
          </p>

          {/* Search Box */}
          <div
            style={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Search Research Topic..."
              style={{
                width: "650px",
                padding: "18px 22px",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,.15)",
                background: "rgba(255,255,255,.05)",
                color: "white",
                fontSize: "18px",
                outline: "none",
              }}
            />
          </div>

          {/* Buttons */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <button
              onClick={handleSearch}
              disabled={loading}
              style={{
                padding: "16px 35px",
                background: "#3B82F6",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              {loading ? "Searching..." : "Start Research"}
            </button>

            <button
              style={{
                padding: "16px 35px",
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {result && (
        <div
          style={{
            background: "#020617",
            padding: "60px",
          }}
        >
          <h1
            style={{
              color: "white",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Search Results
          </h1>

          <p style={{ color: "white" }}>
  Number of Papers: {result.papers.length}
</p>

          {result.papers.map((paper, index) => (
            <PaperCard
              key={index}
              paper={paper}
            />
          ))}
          <RecommendationCard
  topics={result.recommended_topics}
/>
<TrendChart
    trend={result.trend}
/>
<ResearchGapCard
    gap={result.research_gap}
/>
        </div>
      )}
    </>
  );
}

export default Hero;