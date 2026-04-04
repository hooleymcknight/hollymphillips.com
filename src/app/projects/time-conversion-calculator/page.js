'use client'
import { useState, useEffect } from 'react';
import '../../styles/timeConvCalc.css';
import TimeCalc from '@/app/components/projects/timeConvCalc/timeCalc';

export default function TimeConvCalcPage() {

    return (
        <main className="max-w-[1000px] mx-auto time-calc">
            <TimeCalc />
        </main>
    );
}