"use client";

import React, { Suspense } from 'react';
import LoadingImage from '../components/layout/Loading';
import Header from '@/components/layout/Header';
import HomePage from '@/components/content/home-page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<LoadingImage />}>
        <Header />
        <HomePage />
      </Suspense>
    </main>
  );
}
