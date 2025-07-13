import { useEffect, useState } from 'react';

const NetworkBanner = () => {
  const [networkType, setNetworkType] = useState('');

  useEffect(() => {
    if ('connection' in navigator) {
      const type = navigator.connection.effectiveType;
      if (['2g', '3g', 'slow-2g'].includes(type)) {
        setNetworkType(type);
      }
    }
  }, []);

  if (!networkType) return null;

  return (
    <div className='bg-red-500 text-white text-center py-2 rounded mb-4 font-semibold'>
      ⚠️ You are on a slow network ({networkType})
    </div>
  );
};

export default NetworkBanner;
