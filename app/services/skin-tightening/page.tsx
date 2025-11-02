import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function SkinTighteningPage() {
  return (
    <ServicePageTemplate
      title="Skin Tightening"
      subtitle="Embrace Firmer, More Youthful Skin"
      description="At Dermaglare Skin, we offer state-of-the-art, non-invasive skin tightening treatments to combat the signs of aging and skin laxity. Using modified acoustic wave pulses, this cutting-edge technology induces vibrations in the targeted connective tissue, resulting in firmer and more youthful-looking skin."
      sections={[
        {
          title: "Addressing Cellulite and Stretch Marks",
          content: "Along with its skin-tightening benefits, our innovative treatment also effectively reduces the appearance of cellulite and stretch marks. It targets and breaks down the connective tissue bands responsible for these concerns, thereby smoothing the skin's surface and improving its overall texture and appearance."
        },
        {
          title: "The Skin Tightening Process",
          content: "Administered by the experienced Dr. Jabu Nkehli, this procedure involves directing controlled waves of energy into the skin's layers. This energy stimulates collagen and elastin production, the proteins responsible for the skin's elasticity and firmness, promoting a tighter, smoother, and younger-looking appearance."
        },
        {
          title: "Who is it For?",
          content: "Skin tightening treatments are ideal for anyone experiencing sagging skin, cellulite, or stretch marks who want a non-invasive solution. Suitable for various skin types, it's an effective way to rejuvenate your skin without the downtime or discomfort associated with surgical procedures."
        }
      ]}
    />
  );
}