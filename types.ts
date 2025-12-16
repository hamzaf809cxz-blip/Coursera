import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: string; // Display string (e.g. "113 Million+")
  numericValue: number; // For counting animation (e.g. 113)
  suffix?: string; // e.g. " Million+"
  icon: React.ComponentType<any>;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Partner {
  name: string;
  logo: string;
  type: 'University' | 'Industry';
}