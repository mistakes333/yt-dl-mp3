export const metadata = {
  title: "Youtube2mp3",
  description: "",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
      <body>{children}</body>
    </html>
  )
}
