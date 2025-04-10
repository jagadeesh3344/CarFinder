import React from 'react';
import CarCard from './CarCard';
import styles from './CarList.module.css';
import { FaHeart } from 'react-icons/fa';

const CarList = ({ cars, onWishlistToggle }) => {
    if (cars.length === 0) {
        return (
            <div className={styles.noResults}>
                <h3>No vehicles found matching your criteria</h3>
                <p>Try adjusting your filters or search query</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Available Cars ({cars.length})</h3>
                <button 
                    className={styles.wishlistButton}
                    onClick={onWishlistToggle}
                    aria-label="View wishlist"
                >
                    <FaHeart /> View Wishlist
                </button>
            </div>
            <div className={styles.grid}>
                {cars.map((car) => (
                    <CarCard 
                        key={car.id} 
                        car={car} 
                        onWishlistToggle={onWishlistToggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarList;
