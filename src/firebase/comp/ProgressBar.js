import React, { useEffect } from 'react';
import useStorage from './UseStorege';
// import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile ,setImg }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setImg(url)
      console.log(url);
    }
  }, [url, setFile]);

  return (
    // <motion.div className="progress-bar"
    //   initial={{ width: 0 }}
    //   animate={{ width: progress + '%' }}
    // ></motion.div>
    <div>
        {progress} %
    </div>
  );
} 

export default ProgressBar;