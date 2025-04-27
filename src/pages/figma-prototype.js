import React from 'react';
import Layout from '@theme/Layout';

function FigmaPrototype() {
  return (
    <Layout>
      <div style={{ padding: '15px' }}>
        {/* Title aligned to the left */}
        <h1 style={{ textAlign: 'left',  paddingLeft: '100px'}}>Figma Prototyp</h1>
        
        {/* Center the iframe */}
        <div style={{
          display: 'flex',
          justifyContent: 'center', 
        }}>
          <iframe
            style={{
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
            width="1300"
            height="750"
            src="https://embed.figma.com/proto/Tr4I7OV2lvsMEeq8T2rcQ5/ELVIRA---redesign?node-id=15-3&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A3&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default FigmaPrototype;



