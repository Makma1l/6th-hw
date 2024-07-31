"use client"; 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.back(); 
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Topilmadi</h1>
      <p>{countdown} soniyada orqaga qaytiladi</p>
    </div>
  );
}
