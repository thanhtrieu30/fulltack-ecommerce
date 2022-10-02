import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import ComonSection from '../UI/ComonSection'
import '../Style/shop.css'
import ProductsList from '../UI/ProductsList'
import products from '../assets/data/products'
import { useState } from 'react'

const Shop = () => {

  const [product , setProduct] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === 'all') {
     
      setProduct(products);
    }
    if (filterValue === 'sofa') {
      const filteredProducts = products.filter((item) => item.category === 'sofa');
      setProduct(filteredProducts);
    }
    if (filterValue === 'chair') {
      const filteredProducts = products.filter((item) => item.category === 'chair');
      setProduct(filteredProducts);
    }
    if (filterValue === 'mobile') {
      const filteredProducts = products.filter((item) => item.category === 'mobile');
      setProduct(filteredProducts);
    }
    if (filterValue === 'watch') {
      const filteredProducts = products.filter((item) => item.category === 'watch');
      setProduct(filteredProducts);
    }
    if (filterValue === 'wireless') {
      const filteredProducts = products.filter((item) => item.category === 'wireless');
      setProduct(filteredProducts);
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value
    const searchedProducts =  products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProduct(searchedProducts)
  }



  return (
    <Helmet title='Shop'>
      <ComonSection title='All Product - Shop Ecommerce' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">WireLess</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder='Search...'  onChange={handleSearch}/>
                <span><i class='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg='3' md='6'>
            <div className="filter__widget">
                <select>
                  <option>Sort</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            
              {
                product.length === 0 ? (
                  <h1>No products are found !</h1>
                ) : (
                  <ProductsList data={product}  />
                )
              }
            
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop