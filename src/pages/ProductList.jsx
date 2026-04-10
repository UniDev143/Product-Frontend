import React, { useEffect, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Banner from '../components/Product List Components/Banner'
import SideNav from '../components/Product List Components/SideNav'
import Card from '../components/Product List Components/Card'
import heroBannerImage from '../assets/ProductList/HERO.png'
import heroBannerImage2 from '../assets/ProductList/HERO (1).png'
import heroBannerImage3 from '../assets/ProductList/HERO (2).png'
import frameBannerImage1 from '../assets/ProductList/Frame 1000007304.png'
import frameBannerImage2 from '../assets/ProductList/Frame 1000007305.png'
import frameBannerImage3 from '../assets/ProductList/Frame 1000007306.png'
import singleDiskBanner from '../assets/ProductList/image 29.png'
import { useDataContext } from '../context/DataContext'

const ProductList = () => {
  const {
    products,
    filteredProducts,
    isProductsLoading,
    productsError,
    productFilters,
    setProductFilter,
    categories,
    sidebarItems,
  } = useDataContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const appliedCategoryQueryRef = useRef('')

  const bannerImage = useMemo(() => {
    const bannerByCategory = {
      all: frameBannerImage1,
      'Single disk floor scrubbing machine': heroBannerImage3,
      'janitorial equipments': frameBannerImage2,
      'floor cleaning chemicals and equipments': frameBannerImage3,
      'ride on scrubber dryer': heroBannerImage,
      'industrial vacumm cleaner': heroBannerImage2,
      'walk behind scubber dryer': frameBannerImage1,
    }

    return bannerByCategory[productFilters.category] || heroBannerImage
  }, [productFilters.category])

  useEffect(() => {
    const categoryFromQuery = searchParams.get('category')

    if (!categoryFromQuery) {
      appliedCategoryQueryRef.current = ''
      return
    }

    if (appliedCategoryQueryRef.current === categoryFromQuery) {
      return
    }

    if (categories.includes(categoryFromQuery) && productFilters.category !== categoryFromQuery) {
      setProductFilter('category', categoryFromQuery)
    }

    appliedCategoryQueryRef.current = categoryFromQuery
  }, [searchParams, categories, productFilters.category, setProductFilter])

  const handleSidebarChange = (itemId) => {
    setProductFilter('category', itemId)

    if (itemId === 'all') {
      setSearchParams({})
      return
    }

    setSearchParams({ category: itemId })
  }

  return (
    <div className="w-full pb-10 pt-0">
      <Banner image={bannerImage} alt="Products" />

      <div className="mt-0 w-full bg-white py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-7">
      <div className="grid gap-5 lg:grid-cols-[200px_minmax(0,1fr)]">
          <SideNav
            items={sidebarItems}
            activeItemId={productFilters.category}
            onChange={handleSidebarChange}
          />

          {isProductsLoading ? (
            <section className="rounded-xl bg-[#f7f7f7] p-6 text-sm font-semibold text-slate-600">Loading products...</section>
          ) : productsError ? (
            <section className="rounded-xl bg-red-50 p-6 text-sm font-semibold text-red-600">{productsError}</section>
          ) : filteredProducts.length === 0 ? (
            <section className="rounded-xl bg-[#f7f7f7] p-6 text-sm font-semibold text-slate-600">No products match the selected filters.</section>
          ) : (
            <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card key={product._id || product.id} product={product} />
              ))}
            </section>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductList
