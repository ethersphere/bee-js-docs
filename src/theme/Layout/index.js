// src/theme/Layout/index.js
import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <a
        href="https://discord.com/channels/799027393297514537/811574542069137449"
        className="floating-help-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Get Help
      </a>
    </>
  );
}
