import React,{useEffect,useState} from 'react'



import './Project9.css'
import AllProducts from './components/AllProducts';

export default function Project9() {

  const [loading,setLoading] = useState(true)
  const [loadingCat,setLoadingCat] = useState(true)

  const [selectCategory,setSelectCategory] = useState('')

  const [searchText,setSearchText] = useState('')

  const [baseProducts,setBaseProducts] = useState([])
  const [products,setProducts] = useState([])
  const [allcategories,setAllCategories] = useState([])

  const getAllProducts = async() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
      setBaseProducts(data)
      setLoading(false)
    })
  }

  const checkSearch = (text) => {
    setSearchText(text)
    let newProducts;
    if(text.length > 0){
      searchText.length > 0 ? setLoading(true) : setLoading(false)
      newProducts = products.filter(product=>{
        return product.title.toLowerCase().includes(text.toLowerCase())
      }
      )
      searchText.length > 0 ? setLoading(false) : setLoading(true)
      
    }else{
      if(category.length > 0)
      {
        newProducts = baseProducts.filter(product => {
          return product.category.toLowerCase() === selectCategory.toLowerCase()
        })
        
      }else{
        newProducts = baseProducts
      }

      setLoading(false)
      
    
    }

    setProducts(newProducts)
   
  }



  const getAllCategories = async(category) => {
    setLoading(true)
    setLoadingCat(true)
    setSelectCategory(category)
    console.log(category)
    if(selectCategory !== ''){
      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setLoading(false)
        setLoadingCat(false)
      })
    }else{
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>{
              setAllCategories(data)
              setLoadingCat(false)
              console.log(data)
            })
    }
    
  }

  useEffect(() => {
    getAllProducts()
    getAllCategories()
  }, []);


  
  return (
    <div className='EcommerceContainer'>
      <header>
        <h2>Fake Store API E-commerce Store</h2>
      </header>
      
      <nav className='categoryNav' >
        {loadingCat && loadingCat ? loadingCat : allcategories.map(category=>(
          <div className='categoryContainer' onClick={( ) => getAllCategories(category) }>
            <p >{category}</p>
          </div>
         ))}
          
      </nav>

      <section className='searchBar'> 
        <br/>
        <input type="text" placeholder="Search Items..." onChange={(e) => checkSearch(e.target.value)} />
      </section>

      <section className='products'>
          <br/>
          {loading && selectCategory ? <h3>Loading...</h3> : <AllProducts products={products} category={selectCategory} /> }
      </section>

     


    </div>
  )
}
