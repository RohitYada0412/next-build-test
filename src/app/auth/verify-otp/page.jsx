"use client";

// import VerifyOTP from '@/components/VerifyOtpPage';
import dynamic from 'next/dynamic';

const VerifyOtpPage = dynamic(() => import('@/components/VerifyOtpPage'), {
  ssr: false
});

export default function Page() {
  return (
    <VerifyOtpPage />
  );
}
