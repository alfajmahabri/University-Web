import React from 'react';
import './placement.css';

const placements = [
	{
		name: 'Piyush Ghatage',
		dept: 'Computer Science & Engg.',
		degree: 'BTech - 2026',
		ctc: '18 LPA',
		company: 'Juspay',
		img: '/' 
	},
	{
		name: 'Atharv Babar',
		dept: 'Computer Science & Engg.',
		degree: 'BTech - 2026',
		ctc: '14 LPA',
		company: 'Hexaware',
		img: '/' 
	}
];

function PlacementCard({ p }) {
	return (
		<div className="placement-card">
			<div className="card-inner">
				<div className="card-left">
					<h3 className="student-name">{p.name}</h3>
					<p className="student-dept">{p.dept}</p>
					<p className="student-degree">{p.degree}</p>
					<div className="ctc-block">
						<span className="ctc-amount">{p.ctc}</span>
						<span className="ctc-sub">placed at {p.company}</span>
					</div>
				</div>

				<div className="card-right">
					<img className="portrait" src={p.img} alt={p.name} />
				</div>
			</div>
		</div>
	);
}

export default function Placement() {
	return (
		<section className="placements">
			<h2 className="placements-title">Best Placements 2026</h2>
			<p className="placements-intro">
				Our institute offers unparalleled career prospects through placement opportunities with elite companies, top corporations, Fortune 500 organizations, and unicorn start-ups of national and global repute. We bridge talent with opportunity, with job placements at the forefront of innovation and excellence.
			</p>

			<div className="placements-grid">
				{placements.map((p, i) => (
					<PlacementCard key={i} p={p} />
				))}
			</div>
		</section>
	);
}
