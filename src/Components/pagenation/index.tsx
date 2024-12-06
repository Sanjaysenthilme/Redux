import React, { useEffect, useState } from "react";
import Styles from "./styles.module.css"; // Corrected file name

const PageNation = () => {
  const [fetchProduct, setFetchProduct] = useState<[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const Item_Per_Page = 5;

  const indexOfLastItem = currentPage * Item_Per_Page; //1*5 = 5
  const indexOfFirstItem = indexOfLastItem - Item_Per_Page; // 5 -5 = 0
  const currentItem = fetchProduct.slice(indexOfFirstItem, indexOfLastItem); // 0,5

  const fetchProductAPI = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    if (data && data.products) {
      setFetchProduct(data.products);
    }
  };

  useEffect(() => {
    fetchProductAPI();
  }, []);

  console.log(fetchProduct);

  // Handle previous page click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page click
  const handleNextPage = () => {
    if (currentPage < Math.ceil(fetchProduct.length / Item_Per_Page)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className={Styles.userList}>
        {currentItem.map((pro: any) => {
          console.log(pro.images, "::::::::::::::::");
          return (
            <div className={Styles.userCard} key={pro.id}>
              <img
                src={pro.images[0]}
                alt={pro.brand}
                width="100%"
                height="auto"
              />
              <span>{pro.title}</span>
            </div>
          );
        })}
      </div>
      {/* Pagination controls */}
      <div className={Styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(fetchProduct.length / Item_Per_Page)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(fetchProduct.length / Item_Per_Page)
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PageNation;
