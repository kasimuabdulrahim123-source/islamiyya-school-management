export default function AdmissionsPage() {
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
        📝 Online Admissions | Neman Gurbin Karatu
      </h1>

      <p>
        Welcome to our online admission portal. Parents and guardians can
        apply for their children from anywhere.
      </p>

      <p>
        Maraba da zuwa tsarin neman gurbin karatu na yanar gizo. Iyaye za
        su iya yin rajista daga ko'ina cikin sauƙi.
      </p>

      <h2>📋 Information Required</h2>

      <ul>
        <li>Student Full Name</li>
        <li>Date of Birth</li>
        <li>Gender</li>
        <li>Parent/Guardian Name</li>
        <li>Phone Number</li>
        <li>Home Address</li>
        <li>Previous School (Optional)</li>
        <li>Class Applying For</li>
      </ul>

      <h2>📄 Required Documents</h2>

      <ul>
        <li>Birth Certificate</li>
        <li>Passport Photograph</li>
        <li>Previous School Result (Optional)</li>
      </ul>

      <h2>⏳ Application Status</h2>

      <p>
        After submitting your application, the school management will
        review it and contact you.
      </p>

      <p>
        Bayan aika buƙatarku, makaranta za ta tantance sannan ta tuntube ku.
      </p>
    </main>
  );
}
