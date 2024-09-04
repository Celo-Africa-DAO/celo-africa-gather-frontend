import Product from '@/components/products/Product'
import { HeroCard } from '@/components/ui/Card/HeroCard'
import FeaturedCollection from '@/components/FeaturedCollection'
import React from 'react'
import NewArrival from '@/components/NewArrival'

export default function Home() {
  return (
    <div className='p-6 flex flex-col gap-6'>
    <HeroCard />
    <FeaturedCollection />
    <NewArrival />
    </div>
  )
}
