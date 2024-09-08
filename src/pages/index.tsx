import { HeroCard } from '@/components/HeroCard'
import FeaturedCollection from '@/components/FeaturedCollection'
import React from 'react'
import NewArrival from '@/components/NewArrival'
export interface ProductType {
	id: number;
	name: string;
	category: string;
	image: string;
	price: string;
	rating: number;
	stock: number;
	description: string;
}
export default function Home() {
  return (
    <div className='p-6 flex flex-col gap-6'>
    <HeroCard />
    <FeaturedCollection />
    <NewArrival />
    </div>
  )
}
