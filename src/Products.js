import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./Context/FilterContext";

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
                                                  {/* whole left side */}
          <FilterSection />            
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
                                                    {/* List/Grid icon ,    length of products available,          drop down filter of price,name */}
            <Sort />
          </div>
          <div className="main-product">

                                                                  {/* Grid/List view */}
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};


export default Products;