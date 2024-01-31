"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function errorPage({ error }: ErrorProps) {
  return <div>{error.message}</div>;
}
