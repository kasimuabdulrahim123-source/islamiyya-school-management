export default function ParentPortalPage() {
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
      <h1 style={{ textAlign: "center", color: "#0b6623" }}>
        👨‍👩‍👧 Parent Portal | Shafin Iyaye
      </h1>

      <p style={{ textAlign: "center" }}>
        Parents can monitor their children's academic and Islamic progress from
        anywhere.
      </p>

      <hr />

      <h2>📋 Attendance Tracking</h2>
      <p>
        Parents will be able to see their children's daily attendance records
        and receive notifications for absences.
      </p>

      <h2>📖 Tahfiz Progress</h2>
      <p>
        Track Qur'an memorization progress, completed surahs, revision status,
        and teacher remarks.
      </p>

      <h2>📝 Academic Results</h2>
      <p>
        View examination results, assignments, and overall performance reports.
      </p>

      <h2>📢 School Announcements</h2>
      <p>
        Receive important school news, event updates, and announcements
        directly through the portal.
      </p>

      <h2>💳 Fee Payments</h2>
      <p>
        Parents can upload payment receipts after making transfers to the
        school's bank account. The administration will verify the payment before
        updating the student's status.
      </p>

      <div
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <strong>Future Features:</strong>

        <ul>
          <li>Parent login accounts</li>
          <li>Real-time attendance notifications</li>
          <li>Tahfiz performance charts</li>
          <li>Online fee payment records</li>
          <li>Direct communication with teachers</li>
        </ul>
      </div>

      <hr />

      <h2>🇳🇬 Bayani a Hausa</h2>

      <p>
        Wannan shafi zai ba iyaye damar bibiyar halartar 'ya'yansu makaranta,
        cigaban haddar Al-Qur'ani, sakamakon jarrabawa, da kuma sanarwar
        makaranta daga ko'ina.
      </p>

      <p>
        Haka kuma, iyaye za su iya loda shaidar biyan kuɗin makaranta bayan
        sun yi tura kuɗi zuwa asusun makaranta, sannan jami'an makaranta su
        tabbatar da biyan kafin a sabunta bayanan ɗalibi.
      </p>
    </main>
  );
}
