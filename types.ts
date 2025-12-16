import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Partner {
  name: string;
  logo: string;
  type: 'University' | 'Industry';
}