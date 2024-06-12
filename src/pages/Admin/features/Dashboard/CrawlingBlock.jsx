import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export const CrawlingBlock = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-lightBlue rounded-xl p-4">
      <div className="flex justify-between gap-8 items-center">
        <div className="w-44">
          <Button variant="contained" color="primary">
            Start Crawling
          </Button>
        </div>
        <div className="w-full">
          <LinearProgress variant="determinate" value={progress} />
        </div>
      </div>
    </div>
  );
};
