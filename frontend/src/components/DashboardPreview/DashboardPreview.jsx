function DashboardPreview() {
  return (
    <section
      style={{
        background: "#020617",
        padding: "120px 40px"
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}
      >
        <div>

          <h1
            style={{
              color: "white",
              fontSize: "55px",
              lineHeight: "1.2"
            }}
          >
            Smart Dashboard
          </h1>

          <p
            style={{
              color: "#94A3B8",
              marginTop: "25px",
              fontSize: "20px",
              lineHeight: "1.8"
            }}
          >
            Manage saved papers, compare research,
            generate AI summaries,
            detect research gaps,
            and visualize research trends
            from one intelligent dashboard.
          </p>

        </div>

        <div
          style={{
            background: "#111827",
            borderRadius: "25px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,.08)"
          }}
        >

          <div
            style={{
              background: "#1E293B",
              height: "65px",
              borderRadius: "15px",
              marginBottom: "25px"
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px"
            }}
          >
            <div
              style={{
                height: "140px",
                background: "#334155",
                borderRadius: "15px"
              }}
            />

            <div
              style={{
                height: "140px",
                background: "#334155",
                borderRadius: "15px"
              }}
            />

            <div
              style={{
                height: "180px",
                background: "#334155",
                borderRadius: "15px"
              }}
            />

            <div
              style={{
                height: "180px",
                background: "#334155",
                borderRadius: "15px"
              }}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;