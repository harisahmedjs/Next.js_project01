

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
  <h1>layout2</h1>
      {children}
      </>
      
  );
}
