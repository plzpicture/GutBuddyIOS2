export const metadata = {
  title: "GutBuddy - Gut Health Tracker",
  description: "Your personal gut health companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#FFF9F0" }}>
        {children}
      </body>
    </html>
  );
}
