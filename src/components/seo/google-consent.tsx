import Script from "next/script";

/**
 * Consent Mode v2 hook. Nothing is loaded unless NEXT_PUBLIC_GTAG_ID is set
 * in the host environment. Do not commit a measurement ID.
 *
 * When an ID is present, consent defaults to denied for ads and analytics
 * until a consent banner calls gtag('consent', 'update', …).
 */
export function GoogleConsent() {
  const id = process.env.NEXT_PUBLIC_GTAG_ID?.trim() ?? "";
  if (!/^G-[A-Z0-9]+$/.test(id) && !/^GT-[A-Z0-9]+$/.test(id) && !/^AW-[0-9]+$/.test(id)) {
    return null;
  }
  const bootstrap = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500
    });
    gtag('js', new Date());
    gtag('config', '${id}');
  `;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="gtag-consent" strategy="afterInteractive">
        {bootstrap}
      </Script>
    </>
  );
}
