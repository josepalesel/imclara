// app/layout.tsx
import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clara | Assistente de Saúde Plamedic',
  description: 'Sua assistente de saúde digital pronta para te ajudar com exames, agendamentos e dúvidas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
