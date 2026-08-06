"use client";

import { useEffect, useState } from "react";

function calculateTimeRemaining(targetDate) {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = Date.now();
    const difference = Math.max(targetTime - currentTime, 0);

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24,
        ),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: difference <= 0,
    };
}

export function useCountdown(targetDate) {
    const [timeRemaining, setTimeRemaining] = useState(() =>
        calculateTimeRemaining(targetDate),
    );

    useEffect(() => {
        function updateCountdown() {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }

        updateCountdown();

        const intervalId = window.setInterval(
            updateCountdown,
            1000,
        );

        return () => {
            window.clearInterval(intervalId);
        };
    }, [targetDate]);

    return timeRemaining;
}