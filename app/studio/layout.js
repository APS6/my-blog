export const metadata = {
  title: "Dashboard | APS's blog",
  description: "Admin dashboard for my blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
