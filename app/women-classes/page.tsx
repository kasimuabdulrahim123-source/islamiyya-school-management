export default function WomenClassesPage() {
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
        🌸 Women's Online Islamic Classes
      </h1>

      <p style={{ textAlign: "center" }}>
        Islamic education programs exclusively for women, taught by qualified
        female instructors.
      </p>

      <hr />

      <h2>📚 Courses Offered</h2>

      <ul>
        <li>Qur'an Reading and Tajweed</li>
        <li>Tahfiz (Qur'an Memorization)</li>
        <li>Fiqh for Women</li>
        <li>Hadith Studies</li>
        <li>Arabic Language</li>
        <li>Islamic Moral Education</li>
      </ul>

      <h2>🕒 Class Schedule</h2>

      <p>
        Classes will be conducted online through Zoom or Google Meet.
        Timetables will be provided to registered students every month.
      </p>

      <h2>👩‍🏫 Female Instructors</h2>

      <p>
        All classes are taught by qualified female teachers in accordance with
        Islamic guidelines and school policies.
      </p>

      <h2>💳 Monthly Subscription Process</h2>

      <ol>
        <li>Student registers for the class.</li>
        <li>Student transfers the monthly fee to the school's bank account.</li>
        <li>Student uploads the payment receipt.</li>
        <li>The account status becomes <b>Pending Verification</b>.</li>
        <li>The admin verifies the payment manually.</li>
        <li>Once approved, access is activated for that month.</li>
      </ol>

      <div
        style={{
          backgroundColor: "#fff3cd",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <strong>Note:</strong> Only students with verified monthly payments
        will have access to online classes and learning materials.
      </div>

      <hr />

      <h2>🇳🇬 Bayani a Hausa</h2>

      <p>
        Wannan shiri na koyon addini ne ga mata kaɗai, inda malamai mata masu
        ƙwarewa za su riƙa koyarwa ta yanar gizo.
      </p>

      <p>
        Bayan biyan kuɗin wata ta hanyar tura kuɗi zuwa asusun makaranta,
        ɗaliba za ta loda shaidar biyan kuɗi, sannan jami'an makaranta su
        tantance kafin a ba ta damar shiga karatun watan.
      </p>
    </main>
  );
}
