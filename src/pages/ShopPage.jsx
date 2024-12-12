import React, { useState, useEffect } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Search,
  Dog,
  Cat,
  Fish,
  Bird,
  Rabbit,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";

// Custom CSS for color scheme
const customStyles = `
  :root {
    --primary-color: #0F374A;
    --secondary-color: #b5ba89;
    --text-color: #fff;
    --background-color: #f8f9fa;
  }

  body {
    background-color: var(--background-color);
    color: var(--primary-color);
  }

  .btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-color);
  }

  .btn-primary:hover, .btn-primary:focus {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    color: var(--primary-color);
  }

  .btn-outline-primary {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .btn-outline-primary:hover, .btn-outline-primary:focus {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-color);
  }

  .text-primary {
    color: var(--primary-color) !important;
  }

  .text-secondary {
    color: var(--secondary-color) !important;
  }

  .bg-primary {
    background-color: var(--primary-color) !important;
  }

  .bg-secondary {
    background-color: var(--secondary-color) !important;
  }
`;

// Sample product data (unchanged)
const products = [
  {
    id: 1,
    name: "Royal Canin Dog Food",
    image: image1,
    rating: 5,
    price: 54.99,
    sizes: ["3kg", "7kg", "15kg"],
    category: "Dog",
    description:
      "Premium nutrition tailored for your dog's health and vitality.",
    inStock: true,
    discount: 10,
  },
  {
    id: 2,
    name: "Catit Senses 2.0 Circuit",
    image: image2,
    rating: 4,
    price: 29.99,
    sizes: ["One Size"],
    category: "Cat",
    description: "Interactive play circuit to stimulate your cat's senses.",
    inStock: true,
    discount: 0,
  },
  {
    id: 3,
    name: "Fluval Flex Aquarium Kit",
    image: image1,
    rating: 4,
    price: 199.99,
    sizes: ["15 Gallon", "32 Gallon"],
    category: "Fish",
    description:
      "All-in-one aquarium kit with curved front for panoramic viewing.",
    inStock: false,
    discount: 15,
  },
  {
    id: 4,
    name: image2,
    image: image1,
    rating: 5,
    price: 149.99,
    sizes: ["Medium", "Large"],
    category: "Bird",
    description:
      "Spacious flight cage for parakeets, cockatiels, and other small birds.",
    inStock: true,
    discount: 0,
  },
  {
    id: 5,
    name: "Orthopedic Dog Bed",
    image: image1,
    rating: 4,
    price: 89.99,
    sizes: ["Small", "Medium", "Large"],
    category: "Dog",
    description: "Memory foam bed for ultimate comfort and joint support.",
    inStock: true,
    discount: 20,
  },
  {
    id: 6,
    name: "Catit Fresh & Clear Fountain",
    image: image1,
    rating: 4,
    price: 39.99,
    sizes: ["2L", "3L"],
    category: "Cat",
    description: "Fresh, flowing water to encourage your cat to drink more.",
    inStock: true,
    discount: 0,
  },
  {
    id: 7,
    name: "Tetra ColorFusion Flakes",
    image: image1,
    rating: 5,
    price: 15.99,
    sizes: ["200g", "500g"],
    category: "Fish",
    description: "Color-enhancing flakes for vibrant tropical fish.",
    inStock: true,
    discount: 5,
  },
  {
    id: 8,
    name: "Kaytee Forti-Diet Pro Health",
    image: image2,
    rating: 4,
    price: 24.99,
    sizes: ["2lb", "5lb", "10lb"],
    category: "Bird",
    description:
      "Nutritionally fortified food for parakeets and other small birds.",
    inStock: true,
    discount: 0,
  },
  {
    id: 9,
    name: "Oxbow Essentials Rabbit Food",
    image: image1,
    rating: 5,
    price: 19.99,
    sizes: ["5lb", "10lb"],
    category: "Small Pet",
    description: "High-fiber timothy hay-based pellets for adult rabbits.",
    inStock: true,
    discount: 0,
  },
  {
    id: 10,
    name: "Zilla Reptile Terrarium",
    image: image2,
    rating: 4,
    price: 129.99,
    sizes: ["20 Gallon", "40 Gallon"],
    category: "Reptile",
    description: "Front-opening terrarium ideal for reptiles and amphibians.",
    inStock: true,
    discount: 10,
  },
];

// Pet store categories (unchanged)
const categories = [
  "All",
  "Dog",
  "Cat",
  "Fish",
  "Bird",
  "Small Pet",
  "Reptile",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const productsPerPage = 6;

  // Filter and sort products (unchanged)
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === "priceLowToHigh") return a.price - b.price;
      if (sortBy === "priceHighToLow") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured
    });

  // Pagination (unchanged)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Cart functions (unchanged)
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Wishlist functions (unchanged)
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`${index < rating ? "text-warning" : "text-secondary"}`}
          size={16}
        />
      ));
  };

  // Category icon mapping (unchanged)
  const categoryIcons = {
    Dog: <Dog size={24} />,
    Cat: <Cat size={24} />,
    Fish: <Fish size={24} />,
    Bird: <Bird size={24} />,
    "Small Pet": <Rabbit size={24} />,
    Reptile: <Fish size={24} />, // Using Fish icon as a placeholder for Reptile
  };

  // Effect for updating URL with filters (unchanged)
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== "All") params.set("category", selectedCategory);
    if (searchTerm) params.set("search", searchTerm);
    if (priceRange[0] > 0 || priceRange[1] < 200)
      params.set("price", priceRange.join("-"));
    if (sortBy !== "featured") params.set("sort", sortBy);
    if (currentPage > 1) params.set("page", currentPage);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }, [selectedCategory, searchTerm, priceRange, sortBy, currentPage]);

  return (
    <>
      <style>{customStyles}</style>
      <div className="container py-5">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3 text-primary">
            Paw-some Pet Emporium
          </h1>
          <p className="lead mb-5 text-secondary">
            Your one-stop shop for all your pet's needs!
          </p>

          {/* Search Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for pet products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${
                  selectedCategory === category
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category !== "All" && categoryIcons[category]}
                <span className="ms-2">{category}</span>
              </button>
            ))}
          </div>

          {/* Price Range and Sort */}
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <label className="form-label">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="200"
                step="5"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  {product.discount > 0 && (
                    <span className="position-absolute top-0 end-0 badge bg-danger m-2">
                      {product.discount}% OFF
                    </span>
                  )}
                  <button
                    className="btn btn-light position-absolute top-0 start-0 m-2"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      className={`${
                        wishlist.includes(product.id)
                          ? "text-danger"
                          : "text-secondary"
                      }`}
                      size={20}
                    />
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="mb-2">
                    {renderStars(product.rating)}
                    <small className="text-muted ms-2">
                      ({product.rating}.0)
                    </small>
                  </div>
                  <p className="card-text text-secondary">
                    {product.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {product.discount > 0 ? (
                        <>
                          <span className="fs-5 fw-bold text-danger">
                            $
                            {(
                              product.price *
                              (1 - product.discount / 100)
                            ).toFixed(2)}
                          </span>
                          <span className="text-muted text-decoration-line-through ms-2">
                            ${product.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="fs-5 fw-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      <select
                        className="form-select form-select-sm"
                        style={{ width: "auto" }}
                      >
                        {product.sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      <button
                        className={`btn btn-sm ${
                          product.inStock ? "btn-primary" : "btn-secondary"
                        }`}
                        onClick={() => product.inStock && addToCart(product)}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? (
                          <>
                            <ShoppingCart size={16} className="me-1" />
                            Add to Cart
                          </>
                        ) : (
                          "Out of Stock"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <li
                    key={page}
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="position-fixed bottom-0 end-0 p-3 bg-primary text-white rounded-3 shadow">
            <h5 className="mb-2">Cart ({cart.length} items)</h5>
            <p className="mb-2">
              Total: $
              {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </p>
            <button
              className="btn btn-light"
              onClick={() => alert("Proceeding to checkout!")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
