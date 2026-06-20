function CategoryCard({ categoryTotal }) {
  return (
    <>
      <div className="categoryCard">
        <h4>{categoryTotal.category}</h4>
        <p>{categoryTotal.total}</p>
      </div>
    </>
  );
}

export default CategoryCard;
