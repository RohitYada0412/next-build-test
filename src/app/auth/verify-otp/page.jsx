'use client';

import dynamic from 'next/dynamic';

const VerifyOtpPage = dynamic(() => import('../../../components/VerifyOtpPage'), { 
  ssr: false 
});

export default function Page() {
  return (
      <VerifyOtpPage />
  );
}
