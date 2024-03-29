import React from 'react'

const Sun: React.FC<{
  className: string
  onClick: () => void
}> = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m5 5 1.5 1.5" />
    <path d="M17.5 17.5 19 19" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m5 19 1.5-1.5" />
    <path d="M17.5 6.5 19 5" />
  </svg>
)

export default Sun
