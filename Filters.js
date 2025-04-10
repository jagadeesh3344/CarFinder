import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div className={styles.filters}>
            <div className={styles.filterGroup}>
                <label>Make</label>
                <input
                    type="text"
                    name="make"
                    placeholder="Search by make"
                    value={filters.make || ''}
                    onChange={handleChange}
                />
            </div>
            
            <div className={styles.filterGroup}>
                <label>Price Range</label>
                <div className={styles.rangeInputs}>
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min"
                        value={filters.minPrice || ''}
                        onChange={handleChange}
                    />
                    <span>to</span>
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max"
                        value={filters.maxPrice || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.filterGroup}>
                <label>Fuel Type</label>
                <select
                    name="fuelType"
                    value={filters.fuelType || ''}
                    onChange={handleChange}
                >
                    <option value="">All</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <label>Seats</label>
                <select
                    name="seats"
                    value={filters.seats || ''}
                    onChange={handleChange}
                >
                    <option value="">Any</option>
                    <option value="2">2+ seats</option>
                    <option value="4">4+ seats</option>
                    <option value="5">5+ seats</option>
                    <option value="7">7+ seats</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <label>Sort By</label>
                <select
                    name="sort"
                    value={filters.sort || ''}
                    onChange={handleChange}
                >
                    <option value="">Default</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;