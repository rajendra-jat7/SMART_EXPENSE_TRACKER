import { useEffect, useRef, useState } from 'react';

const SmartTips = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className='mt-10 p-4 bg-zinc-800 rounded-lg shadow animate-fadeIn'
    >
      {visible && (
        <>
          <h2 className='text-xl font-semibold text-white mb-2'>
            💡 Smart Tips
          </h2>
          <ul className='list-disc list-inside text-gray-300 space-y-1'>
            <li>Set category budgets monthly and track over time.</li>
            <li>Review your top 3 spending areas weekly.</li>
            <li>Use location-based trends to save better.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default SmartTips;
