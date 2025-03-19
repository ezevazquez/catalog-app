/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Category {
    _id: string
    name: string
    description?: string
  }
  
  export interface Product {
    _id: string
    name: string
    productId: string
    category: Category
    price: number
    fit: string
    detail?: string
    size: string[]
    color: string
    mainImages: any[]
    additionalImages: any[]
    stockQuantity: number
  }
  
  export interface Header {
    _id: string
    name: string
    image: any
    title: string
    description?: string
  }
  
  export interface Section {
    header: Header
    products: Product[]
  }
  
  export interface Catalog {
    _id: string
    name: string
    catalogId: {
      current: string
    }
    client: string
    sections: Section[]
  }
  
  