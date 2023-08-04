import { Button, Layout } from 'antd'
import React from 'react'
import './card.css'

const Card = () => {
	return (
		<Layout className='cardLayout'>
			<div className='card'>
				<h2>Find the perfect detination</h2>
				<p>Our app will help you find the perfect path for your next trip.
					With an easy-to-use interface and a host of itinerary options,
					planning your next trip has never been easier.</p>
				<Button type="primary" > View more </Button>
				<div>
					<img src='' />
				</div>
			</div>	
		</Layout>
	)
}

export default Card