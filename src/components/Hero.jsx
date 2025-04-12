import { Children, useState } from 'react';
import './../styles/hero.css';

function Hero() {
	const [currentPage, setCurrentPage] = useState('hero');
	const cards = [
		{ id: 1, title: 'Card 1', content: 'Ini konten kartu 1' },
		{ id: 2, title: 'Card 2', content: 'Ini konten kartu 2' },
		{ id: 3, title: 'Card 3', content: 'Ini konten kartu 3' },
		{ id: 4, title: 'Card 4', content: 'Ini konten kartu 4' },
		{ id: 5, title: 'Card 5', content: 'Ini konten kartu 5' },
	];

	const [current, setCurrent] = useState(0);
	const angle = 360 / cards.length;

	const handlePrev = () => {
		setCurrent(prev => (prev - 1 + cards.length) % cards.length);
	};

	const handleNext = () => {
		setCurrent(prev => (prev + 1) % cards.length);
	};

	return (
		<div className="hero-container">
			<div className="hero-main">
				<h1>ZAQO.</h1>
				<h3>
					ZAQO adalah lembaga amil zakat nasional milik masyarakat Indonesia
					yang mengelola zakat, infak, sedekah, serta dana kemanusiaan lainnya melalui
					serangkaian program terintegrasi di bidang pendidikan, kesehatan, ekonomi, dan lingkungan,
					untuk mewujudkan kebahagiaan masyarakat yang membutuhkan.
				</h3>
				<div className="hero-button">
					<button className="kalkulator-button">Kalkulator</button>
					<button className="pembelajaran-button">Pembelajaran</button>
				</div>
			</div>
			<div className="carousel-wrapper">
				<div
					className="carousel"
					style={{ transform: `translateZ(-300px) rotateY(-${current * angle}deg)` }}
				>
					{cards.map((card, i) =>
						<div
							key={card.id}
							className="carousel-card"
							style={{ transform: `rotateY(${i * angle}deg) translateZ(240px)` }}
						>
							<h2>
								{card.title}
							</h2>
							<p>
								{card.content}
							</p>
						</div>
					)}
				</div>
				<div className="controls">
					<button onClick={handlePrev}>⟨</button>
					<button onClick={handleNext}>⟩</button>
				</div>
			</div>
		</div>
	);
}
export default Hero;
