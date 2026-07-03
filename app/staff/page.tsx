export default function StaffPage() {
  const staff = [
    {
      name: "Ustaz Ahmad Musa",
      role: "Head Teacher",
      qualification: "B.A. Islamic Studies",
      subjects: "Qur'an, Tajweed, Fiqh",
      experience: "15 Years",
      bio: "He has over 15 years of experience in Islamic education and student mentoring.",
      emoji: "👳",
    },
    {
      name: "Ustaz Ibrahim Bello",
      role: "Arabic Teacher",
      qualification: "Diploma in Arabic Education",
      subjects: "Arabic Language, Hadith",
      experience: "10 Years",
      bio: "He specializes in Arabic language and Hadith studies.",
      emoji: "👳",
    },
    {
      name: "Ustazah Amina Yusuf",
      role: "Women's Instructor",
      qualification: "B.Sc. Islamic Education",
      subjects: "Tajweed, Fiqh for Women",
      experience: "8 Years",
      bio: "She teaches women and girls with a focus on Tajweed and Islamic morals.",
      emoji: "🥷",
    },
    {
      name: "Ustazah Maryam Ali",
      role: "Tahfiz Instructor",
      qualification: "Diploma in Islamic Studies",
      subjects: "Tahfiz, Hadith",
      experience: "6 Years",
      bio: "She specializes in Qur'an memorization and women's Islamic studies.",
      emoji: "🥷",
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
      <h1 style={{ textAlign: "center", color: "#0b6623" }}>
        👩‍🏫 Our Staff | Ma'aikatan Makaranta
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {staff.map((teacher, index) => (
          <details
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <summary
              style={{
                listStyle: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#e8f5e9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                }}
              >
                {teacher.emoji}
              </div>

              <div>
                <h3>{teacher.name}</h3>
                <p>{teacher.role}</p>
              </div>
            </summary>

            <div style={{ marginTop: "20px" }}>
              <p><b>Qualification:</b> {teacher.qualification}</p>
              <p><b>Subjects:</b> {teacher.subjects}</p>
              <p><b>Experience:</b> {teacher.experience}</p>
              <p><b>Biography:</b> {teacher.bio}</p>
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}
