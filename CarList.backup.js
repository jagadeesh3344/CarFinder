import React from 'react';
import CarCard from './CarCard';
import styles from './CarList.module.css';

const CarList = ({ cars }) => {
    if (cars.length === 0) {
        return (
            <div className={styles.noResults}>
                <h3>No vehicles found matching your criteria</h3>
                <p>Try adjusting your filters or search query</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarList;
