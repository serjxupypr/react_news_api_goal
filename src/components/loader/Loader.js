import React from 'react';
import './loader.css';

const Loader = () => (
  <div className="loader">
    <span>Loading... </span>
    <svg id="loading" viewBox="0 0 100 80">
			<g transform="translate(50 0) scale(0.707 0.707) rotate(45 0 0)">
				<rect className="rect" id="rect1" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
				<rect className="rect" id="rect2" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
				<rect className="rect" id="rect3" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
				<rect className="rect" id="rect4" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
				<rect className="rect" id="rect5" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
				<rect className="rect" id="rect6" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
				<rect className="rect" id="rect7" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="rgba(0, 158, 119, 1)" />
			</g>
		</svg>
  </div>
);

export default Loader;