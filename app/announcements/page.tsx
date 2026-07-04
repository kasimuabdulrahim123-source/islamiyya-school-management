export default function AnnouncementsPage() {
  const announcements = [
    {
      title: "📅 New Academic Session",
      date: "August 2026",
      message:
        "Registration for the new academic session is now open for all students.",
    },
    {
      title: "🕌 Women's Online Classes",
      date: "September 2026",
      message:
        "Monthly online classes for women will commence after payment verification.",
    },
    {
      title: "📖 Tahfiz Competition",
      date: "October 2026",
      message:
        "The annual Qur'an memorization competition will be held in the school hall.",
    },
  ];

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "900px",
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
        📢 Announcements | Sanarwar Makaranta
      </h1>

      <p style={{ textAlign: "center" }}>
        Stay updated with the latest school news and activities.
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {announcements.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{item.title}</h2>
            <small>{item.date}</small>
            <p>{item.message}</p>
          </div>
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h2>🇳🇬 Bayani a Hausa</h2>

      <p>
        Wannan shafi zai riƙa nuna sabbin sanarwa, tarurruka, jarrabawa,
        hutun makaranta, da sauran muhimman bayanai ga ɗalibai da iyaye.
      </p>
    </main>
  );
}
