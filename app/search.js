"use client"
import React from 'react'
import './globals.css';

function Search() {
	return (
		<>
			<nav class="navbar bg-body-tertiary">
				<div class="container-fluid">
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button class="btn btn-outline-success" type="submit">Go</button>
					</form>
				</div>
			</nav>


		</>
	)
}

export default Search;