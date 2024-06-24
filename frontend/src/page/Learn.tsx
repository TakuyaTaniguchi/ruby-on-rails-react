import React, { } from 'react';

/**
 * まず設計の段階でコンポーネントに切ることがかなり重要っぽい
 */

const PRODUCTS:Product[] = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export type Product = {
  category: Category
  price: string
  stocked: boolean
  name: string
}



export type Category = 'Fruits' | 'Vegetables'



function ProductCategoryRow({ category }:{category: Category}) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}:{product:Product}) {

  const name = product.stocked ? product.name :
    <span>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({products}:{products:Product[]}) {
  const rows: JSX.Element[] = [];
  let lastCategory : null | Product["category"]  = null;

  products.forEach((product) =>{
    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
      
    }

  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }: {products:Product[] }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}


export default function LearnPage() {
  return <FilterableProductTable products={PRODUCTS} />;
}
