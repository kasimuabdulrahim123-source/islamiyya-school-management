       export default function HomePage() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f8f4",
        minHeight: "100vh",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#0b6623" }}>
          🕌 Islamiyya School Management System
        </h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Welcome to our official school website
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>📝 Online Admissions</h2>
          <p>Apply for admission into our Islamiyya school online.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>📋 Attendance Tracking</h2>
          <p>Monitor student attendance and receive notifications.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>📖 Tahfiz Progress</h2>
          <p>Track memorization progress and learning achievements.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>👨‍👩‍👧 Parent Portal</h2>
          <p>Parents can monitor their children's activities and results.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>🎓 Adult Learning</h2>
          <p>Join our adult Islamic education programs and classes.</p>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#666",
        }}
      >
        <p>Coming Soon, In Shaa Allah 🤲</p>
      </footer>
    </main>
  );
} 
