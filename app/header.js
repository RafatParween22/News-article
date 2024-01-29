"use client"
import React from 'react';
import './globals.css';

function Header() {
	return (
		<>
			<nav class="navbar bg-body-tertiary">
				<div class="container-fluid">
					<div className='title'>
						<span class="navbar-brand mb-0 h1">NewsAPI<img className='elipse' src="Ellipse.png"></img >Org</span>

					</div>

				</div>

			</nav>
			<hr className='firsthorizontal' />
			<hr className='second horizontal' />


		</>
	)
}

export default Header;