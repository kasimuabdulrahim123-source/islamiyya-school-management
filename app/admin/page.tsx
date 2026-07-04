export default function AdminPage() {
  const sections = [
    {
      title: "📝 Admissions Management",
      description:
        "Review, approve, or reject student admission applications.",
    },
    {
      title: "👩‍🏫 Staff Management",
      description:
        "Add teachers, update profiles, upload photos, and manage staff records.",
    },
    {
      title: "💳 Payment Verification",
      description:
        "Verify uploaded payment receipts and activate student accounts.",
    },
    {
      title: "📋 Attendance Management",
      description:
        "Monitor and manage daily student attendance records.",
    },
    {
      title: "📖 Tahfiz Management",
      description:
        "Track Qur'an memorization progress and teacher remarks.",
    },
    {
      title: "🌸 Women's Classes",
      description:
        "Manage female students, subscriptions, schedules, and online classes.",
    },
    {
      title: "📢 Announcements",
      description:
        "Publish important news and notices to parents, students, and staff.",
    },
  ];

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0b6623",
        }}
      >
        🔐 Admin Dashboard
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
        }}
      >
        School administrators can manage all activities from one central panel.
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h2>🇳🇬 Bayani a Hausa</h2>

      <p>
        Wannan shafin zai bai wa shugabannin makaranta damar sarrafa dukkan
        ayyukan makaranta daga wuri guda, ciki har da rajista, biyan kuɗi,
        halartar ɗalibai, da cigaban haddar Al-Qur'ani.
      </p>
    </main>
  );
}
