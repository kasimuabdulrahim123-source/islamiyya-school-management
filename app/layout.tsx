export const metadata = {
  title: "Islamiyya School Management System",
  description: "Online admissions, attendance, Tahfiz tracking, and adult learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
