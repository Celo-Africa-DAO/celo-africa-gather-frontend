"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
// import UserOrders, { Order } from "@/components/UserOrder";
import { useAccount } from "wagmi";
import useCeloConnect from "@/hooks/useCeloConnect";
import UserOrders, { Order } from "@/components/UserOrder";

const OrdersPage: React.FC = () => {
  const orders: Order[] = [
    {
      time: 1733524,
      item: {
        id: 1,
        name: "A new cat",
        category: "Pets",
        image: "https://www.google.com",
        cost: 0.5,
        rating: 0,
        stock: 4,
        description: "A description",
      },
    },
    {
      time: 1733524,
      item: {
        id: 2,
        name: "A new cat",
        category: "Pets",
        image: "https://www.google.com",
        cost: 0.5,
        rating: 0,
        stock: 4,
        description: "A description",
      },
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Order History</h1>
      <UserOrders orders={orders} />
    </div>
  );
};

export default OrdersPage;
