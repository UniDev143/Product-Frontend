import singleDiskImage from '../assets/ProductList/image 29.png'
import bucketImage from '../assets/LandingPage/Bucket.png'
import chemicalImage from '../assets/LandingPage/Chemical.png'
import rideOnImage from '../assets/LandingPage/Ride on.png'
import vacuumImage from '../assets/LandingPage/Vacuum.png'
import walkBehindImage from '../assets/LandingPage/Walk Behind.png'

export const productTypes = ['SDFSM', "JE's", 'FCC&E', 'RSD', 'IVC', 'WBSD']

export const productsData = [
  {
    id: 1,
    type: productTypes[0],
    name: 'Single Disk Floor Scrubbing Machine',
    description: 'Compact single-disk machine for deep floor scrubbing and polishing in commercial spaces.',
    price: 125000,
    image: singleDiskImage,
  },
  {
    id: 2,
    type: productTypes[1],
    name: 'Janitorial Equipment Set',
    description: 'Durable multi-bucket janitorial trolley set designed for efficient daily cleaning tasks.',
    price: 45000,
    image: bucketImage,
  },
  {
    id: 3,
    type: productTypes[2],
    name: 'Floor Cleaning Chemicals and Equipment',
    description: 'Professional-grade chemical cleaning solutions with essential floor cleaning accessories.',
    price: 18000,
    image: chemicalImage,
  },
  {
    id: 4,
    type: productTypes[3],
    name: 'Ride On Scrubber Dryer',
    description: 'Heavy-duty ride-on scrubber dryer for fast cleaning of large industrial and commercial floors.',
    price: 650000,
    image: rideOnImage,
  },
  {
    id: 5,
    type: productTypes[4],
    name: 'Industrial Vacuum Cleaner',
    description: 'High-suction industrial vacuum built for wet and dry use in demanding cleaning environments.',
    price: 95000,
    image: vacuumImage,
  },
  {
    id: 6,
    type: productTypes[5],
    name: 'Walk Behind Scrubber Dryer',
    description: 'Easy-to-operate walk-behind scrubber dryer ideal for malls, offices, and warehouses.',
    price: 280000,
    image: walkBehindImage,
  },
]
