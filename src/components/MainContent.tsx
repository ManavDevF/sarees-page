import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilterSort from "./FilterSort";
import SareeCard from "./SareeCard";
import SearchBox from "./SearchBox";

interface Saree {
  name: string;
  price: number;
  imageUrl: string;
}

const sarees: Saree[] = [
  { name: "Red silk saree", price: 3500, imageUrl: "url_to_image1" },
  { name: "Banarasi saree", price: 8000, imageUrl: "url_to_image2" },
  { name: "Georgette", price: 900, imageUrl: "url_to_image3" },
  { name: "Kanjivaram", price: 1200, imageUrl: "url_to_image4" },
];

const MainContent: React.FC = () => {
  const [filteredSarees, setFilteredSarees] = useState<Saree[]>(sarees);

  const handleSearch = (searchTerm: string) => {
    const searchResult = sarees.filter((saree) =>
      saree.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSarees(searchResult); // Update the filtered sarees based on the search
  };

  const handleFilterChange = (filter: string) => {
    console.log(`Selected filter: ${filter}`);
    setFilteredSarees(sarees); // Modify this to apply filter
  };

  const handleSortChange = (sort: string) => {
    let sortedSarees = [...filteredSarees];
    if (sort === "Low to High") {
      sortedSarees.sort((a, b) => a.price - b.price);
    } else if (sort === "High to Low") {
      sortedSarees.sort((a, b) => b.price - a.price);
    }
    setFilteredSarees(sortedSarees);
  };

  return (
    <Container>
      <Row>
        {/* Search Bar */}
        <Col xs={12} className="mb-4">
          <SearchBox onSearch={handleSearch} />
        </Col>

        {/* Filter Column */}
        <Col xs={12} md={3} className="mb-4">
          <FilterSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        </Col>

        {/* Sarees Column */}
        <Col xs={12} md={9}>
          <Row>
            {filteredSarees.length > 0 ? (
              filteredSarees.map((saree, index) => (
                <Col xs={12} sm={6} md={4} key={index} className="mb-4">
                  <SareeCard saree={saree} />
                </Col>
              ))
            ) : (
              <p>No sarees found</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
