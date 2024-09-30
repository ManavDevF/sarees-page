import React, { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

// Define the props interface for the FilterSort component
interface FilterSortProps {
    onFilterChange: (filter: string) => void;
    onSortChange: (sort: string) => void;
}

const FilterSort: React.FC<FilterSortProps> = ({ onFilterChange, onSortChange }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('Filter');
    const [selectedSort, setSelectedSort] = useState<string>('Sort by');

    const handleFilterSelect = (filter: string | null) => {
        if (filter) {
            setSelectedFilter(filter);
            onFilterChange(filter); // Call the parent component's filter handler
        }
    };

    const handleSortSelect = (sort: string | null) => {
        if (sort) {
            setSelectedSort(sort);
            onSortChange(sort); // Call the parent component's sort handler
        }
    };


    return (
        <div className="d-flex justify-content-start mb-3">
            {/* Filter Dropdown */}
            <DropdownButton
                as={ButtonGroup}
                title={selectedFilter}
                id="filter-dropdown"
                variant="secondary"
                className="me-3"
                onSelect={handleFilterSelect} // TypeScript will now accept this

            >
                <Dropdown.Item eventKey="Category">Category</Dropdown.Item>
                <Dropdown.Item eventKey="Fit">Fit</Dropdown.Item>
                <Dropdown.Item eventKey="Fabric">Fabric</Dropdown.Item>
                <Dropdown.Item eventKey="Color">Color</Dropdown.Item>

                {/* Sub-Dropdown for Category */}
                <Dropdown.Divider />
                <Dropdown.ItemText>Category Options</Dropdown.ItemText>
                <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
            </DropdownButton>

            {/* Sort Dropdown */}
            <DropdownButton
                as={ButtonGroup}
                title={selectedSort}
                id="sort-dropdown"
                variant="secondary"
                onSelect={handleSortSelect} // TypeScript will now accept this
            >
                <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
                <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
                <Dropdown.Item eventKey="Relevance">Relevance</Dropdown.Item>
                <Dropdown.Item eventKey="Best Seller">Best Seller</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default FilterSort;
