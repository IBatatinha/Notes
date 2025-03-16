import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Notes | Melhor plataforma de anotações',
    template: 'Notes | %s',
    default: 'Notes | Melhor plataforma de anotações',
  },
  description: 'Conheça agora mesmo a melhor plataforma de anotações e lembretes do mercado. Acesse agora mesmo e comece a anotar suas ideias.',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth box-border bg-[#0F0E0E] text-zinc-50 text-base selection:bg-[#D1FF86]/30">
        <main className="w-screen h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
