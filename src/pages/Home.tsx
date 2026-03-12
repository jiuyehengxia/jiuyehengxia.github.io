import { useState, useEffect } from 'react';
import Welcome from '@/components/welcome';
import { welcomeDuration } from '@/common/constants.ts';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, welcomeDuration);
  }, []);

  return <div>{showWelcome && <Welcome />}</div>;
}
