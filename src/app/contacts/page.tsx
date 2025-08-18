'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactsContent from '@/components/ContactsContent';

export default function ContactsPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  }

  return (
    <main
      className={`py-[20px] px-[32px] flex flex-col justify-between box-border h-screen w-full p-6 rounded-[32px] transition-colors duration-500`}
      style={{
        backgroundImage: isDark
          ? 'linear-gradient(to bottom, #121212 0%, #3a3a3a 100%)'
          : 'linear-gradient(to bottom, #00A9FF 0%, #E5E5E5 100%)',
      }}
    >
      <Header onToggleTheme={toggleTheme} />
        <ContactsContent />
      <Footer />
    </main>
  )
}