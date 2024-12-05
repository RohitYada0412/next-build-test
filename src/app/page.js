"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import Dashboard from '../app/dashboard/page'

export default function Home() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Suspense>
        <Dashboard />
      </Suspense>
    </React.Fragment>
  );
}
