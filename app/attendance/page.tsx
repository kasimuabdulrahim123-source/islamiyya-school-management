export default function AttendancePage() {
  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0b6623",
        }}
      >
        📋 Attendance Management | Halartar Dalibai
      </h1>

      <p style={{ textAlign: "center" }}>
        Monitor and manage students' daily attendance records.
      </p>

      <hr />

      <h2>✅ Features</h2>

      <ul>
        <li>Daily attendance marking by teachers.</li>
        <li>Automatic absence notifications to parents.</li>
        <li>Monthly attendance reports.</li>
        <li>Class attendance statistics.</li>
        <li>Student attendance history.</li>
      </ul>

      <h2>👨‍🏫 Teacher Responsibilities</h2>

      <p>
        Teachers will mark students as Present, Absent, Late, or Excused
        through their teacher accounts.
      </p>

      <h2>👨‍👩‍👧 Parent Access</h2>

      <p>
        Parents will receive notifications and can monitor their children's
        attendance records through the Parent Portal.
      </p>

      <hr />

      <h2>🇳🇬 Bayani a Hausa</h2>

      <p>
        Wannan shafi zai taimaka wajen bibiyar halartar ɗalibai a kullum, tare
        da sanar da iyaye idan ɗalibi bai halarci makaranta ba.
      </p>

      <p>
        Malamai za su iya yin rajistar halarta ta hanyar asusun malamai, yayin
        da iyaye za su iya duba bayanan ta Parent Portal.
      </p>
    </main>
  );
}
