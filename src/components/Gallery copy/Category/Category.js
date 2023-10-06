import Button from "react-bootstrap/Button";

function Category({ categories, filterItems }) {
  return (
    <div>
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="primary"
          className="m-3"
          onClick={() => filterItems(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Category;
