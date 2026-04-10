import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { servicesData } from '../data/servicesData'

const DataContext = createContext(null)
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
})

const PRODUCT_CATEGORIES = [
  'Single disk floor scrubbing machine',
  'janitorial equipments',
  'floor cleaning chemicals and equipments',
  'ride on scrubber dryer',
  'industrial vacumm cleaner',
  'walk behind scubber dryer',
]

const initialProductFilters = {
  category: 'all',
  company: 'all',
  country: 'all',
  sortBy: 'oldest',
}

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isProductsLoading, setIsProductsLoading] = useState(true)
  const [productsError, setProductsError] = useState('')
  const [productFilters, setProductFilters] = useState(initialProductFilters)

  const refreshProducts = async () => {
    try {
      setIsProductsLoading(true)
      setProductsError('')
      const response = await apiClient.get('/api/products')
      setProducts(response.data || [])
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to load products. Please try again.'
      setProductsError(message)
    } finally {
      setIsProductsLoading(false)
    }
  }

  useEffect(() => {
    refreshProducts()
  }, [])

  const categories = useMemo(() => PRODUCT_CATEGORIES, [])

  const companies = useMemo(
    () => Array.from(new Set(products.map((product) => product.companyName).filter(Boolean))),
    [products],
  )

  const countries = useMemo(
    () => Array.from(new Set(products.map((product) => product.manufacturedIn).filter(Boolean))),
    [products],
  )

  const sidebarItems = useMemo(
    () => [
      { id: 'all', label: 'All Products', type: 'all' },
      ...categories.map((category) => ({ id: category, label: category, type: category })),
    ],
    [categories],
  )

  const filteredProducts = useMemo(() => {
    const matched = products.filter((product) => {
      const matchesCategory = productFilters.category === 'all' || product.category === productFilters.category
      const matchesCompany = productFilters.company === 'all' || product.companyName === productFilters.company
      const matchesCountry = productFilters.country === 'all' || product.manufacturedIn === productFilters.country

      return matchesCategory && matchesCompany && matchesCountry
    })

    const sorted = [...matched]

    if (productFilters.sortBy === 'oldest') {
      sorted.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0))
    } else if (productFilters.sortBy === 'name-asc') {
      sorted.sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')))
    } else if (productFilters.sortBy === 'name-desc') {
      sorted.sort((a, b) => String(b.name || '').localeCompare(String(a.name || '')))
    } else {
      sorted.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    }

    return sorted
  }, [products, productFilters])

  const setProductFilter = useCallback((name, value) => {
    setProductFilters((prev) => ({ ...prev, [name]: value }))
  }, [])

  const resetProductFilters = useCallback(() => {
    setProductFilters(initialProductFilters)
  }, [])

  const value = {
    servicesData,
    products,
    filteredProducts,
    isProductsLoading,
    productsError,
    refreshProducts,
    productFilters,
    setProductFilter,
    resetProductFilters,
    categories,
    companies,
    countries,
    sidebarItems,
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }

  return context
}