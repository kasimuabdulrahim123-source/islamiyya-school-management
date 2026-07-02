export default function HomePage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f8f4",
        minHeight: "100vh",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#0b6623",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>🕌 Islamiyya School</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <span>Home</span>
          <span>About</span>
          <span>Admissions</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ color: "#0b6623", fontSize: "42px" }}>
          Islamiyya School Management System
        </h1>

        <p style={{ fontSize: "20px", color: "#555" }}>
          Building Islamic knowledge and character for future generations.
        </p>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundColor: "white",
          margin: "20px",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <h2>ℹ️ About Our School</h2>

        <p>
          Our Islamiyya school is dedicated to providing quality Islamic and
          moral education, Tahfiz programs, and modern learning opportunities
          for children and adults.
        </p>
      </section>

      {/* Services */}
      <section
        style={{
          display: "grid",
          gap: "20px",
          padding: "20px",
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

      {/* Contact Section */}
      <section
        style={{
          backgroundColor: "#0b6623",
          color: "white",
          padding: "30px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <h2>📞 Contact Us</h2>

        <p>Email: info@islamiyyaschool.com</p>
        <p>Phone: +234 XXX XXX XXXX</p>

        <p style={{ marginTop: "20px" }}>
          Coming Soon, In Shaa Allah 🤲
        </p>
      </section>
    </main>
  );
}        
