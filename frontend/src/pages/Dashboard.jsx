/*import { useState } from "react";

import Hero from "../components/Hero/Hero";
import PaperCard from "../components/PaperCard/PaperCard";
import RecommendationCard from "../components/RecommendationCard/RecommendationCard";
import ResearchGapCard from "../components/ResearchGapCard/ResearchGapCard";
import TrendChart from "../components/TrendChart/TrendChart";

function Dashboard() {

  const [results, setResults] = useState(null);

  return (
    <>

      <Hero setResults={setResults} />

      {results && (

        <div
          style={{
            width: "90%",
            margin: "60px auto"
          }}
        >

          <h1
            style={{
              color: "white",
              marginBottom: "30px"
            }}
          >
            Search Results
          </h1>

          {results.papers.map((paper, index) => (

            <PaperCard
              key={index}
              paper={paper}
            />

          ))}

          <RecommendationCard
            topics={results.recommended_topics}
          />

          <TrendChart
            trend={results.trend}
          />

          <ResearchGapCard
            gap={results.research_gap}
          />

        </div>

      )}

    </>
  );
}

export default Dashboard;*/