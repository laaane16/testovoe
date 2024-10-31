export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: "-1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>The page is under development</h1>
      {children}
    </div>
  );
}
