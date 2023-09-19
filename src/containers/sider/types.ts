import React from 'react';

export interface SiderProps {
    children?: React.ReactNode;
    siderSide?: 'left' | 'right';
    title?: string;
}