
// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
