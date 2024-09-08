import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ProductType } from "..";

// Dummy data for categories
const dummyData = [
	{
		id: 1,
		name: "Smartphone",
		category: "electronics",
		image: "/img/art.png", // You can add actual image paths
		price: "299.99",
		rating: 4.5,
		stock: 10,
		description: "A high-end smartphone with cutting-edge features.",
	},
	{
		id: 2,
		name: "Laptop",
		category: "electronics",
		image: "/img/Depth.png",
		price: "999.99",
		rating: 4.7,
		stock: 5,
		description: "Powerful laptop for work and gaming.",
	},
	{
		id: 2,
		name: "Laptop",
		category: "electronics",
		image: "/img/Depth.png",
		price: "999.99",
		rating: 4.7,
		stock: 5,
		description: "Powerful laptop for work and gaming.",
	},

	{
		id: 3,
		name: "T-shirt",
		category: "clothing",
		image: "/img/Depth.png",
		price: "19.99",
		rating: 4.3,
		stock: 50,
		description: "Comfortable cotton t-shirt.",
	},
	{
		id: 4,
		name: "Jacket",
		category: "clothing",
		image: "/img/art.png",
		price: "59.99",
		rating: 4.8,
		stock: 20,
		description: "Stylish leather jacket.",
	},
	{
		id: 4,
		name: "Jacket",
		category: "clothing",
		image: "/img/art.png",
		price: "59.99",
		rating: 4.8,
		stock: 20,
		description: "Stylish leather jacket.",
	},
	
	{
		id: 5,
		name: "Dog",
		category: "pets",
		image: "/img/Depth.png",
		price: "499.99",
		rating: 5,
		stock: 3,
		description: "Friendly dog looking for a new home.",
	},
	{
		id: 6,
		name: "Cat",
		category: "pets",
		image: "/img/art.png",
		price: "199.99",
		rating: 4.9,
		stock: 7,
		description: "Cute cat with playful personality.",
	},
	{
		id: 6,
		name: "Cat",
		category: "pets",
		image: "/img/art.png",
		price: "199.99",
		rating: 4.9,
		stock: 7,
		description: "Cute cat with playful personality.",
	},
	
];

const Categories = () => {
	const [electronicsCat, setElectronicsCat] = useState<ProductType[]>([]);
	const [clothingsCat, setClothingsCat] = useState<ProductType[]>([]);
	const [petsCat, setPetsCat] = useState<ProductType[]>([]);
	const currency = "cUSD"; // Placeholder for currency

	useEffect(() => {
		// Filter dummy data based on categories
		const filteredElectronics = dummyData.filter(
			(item) => item.category === "electronics"
		);
		const filteredClothing = dummyData.filter(
			(item) => item.category === "clothing"
		);
		const filteredPets = dummyData.filter((item) => item.category === "pets");

		// Set state with filtered data
		setElectronicsCat(filteredElectronics);
		setClothingsCat(filteredClothing);
		setPetsCat(filteredPets);
	}, []);

	return (
		<div className="space-y-7">
			<div className="px-4 md:px-8 lg:px-[160px] my-4">
				<h3 className="text-[#9EA6B8] text-[16px] font-medium my-[36px]">
					Categories / Products
				</h3>
			</div>

			{/* Electronics Category */}
			{electronicsCat.length > 0 && (
				<div className="px-4 md:px-8 lg:px-[160px]">
					<h2 className="text-3xl text-[#FFFFFF] font-semibold my-5">
						Electronics
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
						{electronicsCat.map((item) => (
							<div key={item.id} className="">
								<Link
									href={`/item/${item.id}`}
									className="rounded-lg hover:bg-gray-800 flex flex-col"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-auto"
									/>
									<h3 className="text-[16px] text-[#FFFFFF] font-medium mt-5">
										{item.name}
									</h3>
									<p className="text-xl">
										Price: {Number(item.price).toFixed(2)} {currency}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Clothing Category */}
			{clothingsCat.length > 0 && (
				<div className="px-4 md:px-8 lg:px-[160px]">
					<h2 className="text-3xl text-[#FFFFFF] font-semibold my-5">
						Clothing
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
						{clothingsCat.map((item) => (
							<div key={item.id} className="">
								<Link
									href={`/item/${item.id}`}
									className="rounded-lg hover:bg-gray-800 flex flex-col"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-auto"
									/>
									<h3 className="text-[16px] text-[#FFFFFF] font-medium mt-5">
										{item.name}
									</h3>
									<p className="text-xl">
										Price: {Number(item.price).toFixed(2)} {currency}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Pets Category */}
			{petsCat.length > 0 && (
				<div className="px-4 md:px-8 lg:px-[160px]">
					<h2 className="text-3xl text-[#FFFFFF] font-semibold my-5">Pets</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
						{petsCat.map((item) => (
							<div key={item.id} className="">
								<Link
									href={`/item/${item.id}`}
									className="rounded-lg hover:bg-gray-800 flex flex-col"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-auto"
									/>
									<h3 className="text-[16px] text-[#FFFFFF] font-medium mt-5">
										{item.name}
									</h3>
									<p className="text-xl">
										Price: {Number(item.price).toFixed(2)} {currency}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Categories;
