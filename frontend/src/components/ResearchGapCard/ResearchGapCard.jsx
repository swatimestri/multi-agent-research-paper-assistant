import "./ResearchGapCard.css";

function ResearchGapCard({ gap }) {

  if (!gap) return null;

  return (

    <div className="gap-card">

      <h2>🧠 AI Research Gap Analysis</h2>

      <div className="gap-box">

        <h3>Research Gap</h3>

        <p>{gap.research_gap}</p>

      </div>

      <div className="keyword-section">

        <h3>Important Keywords</h3>

        <div className="keyword-container">

          {gap.top_keywords.map((keyword, index) => (

            <span
              key={index}
              className="keyword-chip"
            >
              {keyword}
            </span>

          ))}

        </div>

      </div>

    </div>

  );

}

export default ResearchGapCard;