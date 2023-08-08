import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Customers themselves, will be able to pursue the success of the company.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Customers themselves, customers will be able to pursue the success of the company.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Customers themselves, will be able to pursue the success of the company.',
  },
]

export const products_url = '/.netlify/functions/products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const single_product_url = `/.netlify/functions/single-product?id=`