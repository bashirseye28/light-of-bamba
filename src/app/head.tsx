export default function Head() {
  return (
    <>
      <title>The Light of Shaykh Ahmadu Bamba</title>
      <meta
        name="description"
        content="An accessible educational platform exploring the biography, teachings, and spiritual legacy of Shaykh Ahmadu Bamba."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content="#FAF9F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Light of Shaykh Ahmadu Bamba" />
      <meta
        property="og:description"
        content="Discover the teachings, biography, and light of Shaykh Ahmadu Bamba through a beautifully designed educational experience."
      />
      <meta property="og:url" content="https://mmc.vercel.app" />
      <meta property="og:image" content="https://mmc.vercel.app/og-image.jpg" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Light of Shaykh Ahmadu Bamba" />
      <meta
        name="twitter:description"
        content="Explore Shaykh Ahmadu Bamba's timeless spiritual legacy through immersive, educational storytelling."
      />
      <meta name="twitter:image" content="https://mmc.vercel.app/og-image.jpg" />
    </>
  );
}