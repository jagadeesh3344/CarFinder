import React, { useState, useEffect } from 'react';
import styles from './CarCard.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CarCard = ({ car, onWishlistToggle }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setIsInWishlist(wishlist.some(item => item.id === car.id));
    }, [car.id]);

    const toggleWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        let newWishlist;
        
        if (isInWishlist) {
            newWishlist = wishlist.filter(item => item.id !== car.id);
        } else {
            newWishlist = [...wishlist, car];
        }

        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        setIsInWishlist(!isInWishlist);
        if (onWishlistToggle) onWishlistToggle(newWishlist);
    };

    const getBadgeType = () => {
        if (car.isNew) return 'New';
        if (car.isFeatured) return 'Featured';
        return '';
    };

    const badgeType = getBadgeType();

    return (
        <div className={styles.card}>
            {badgeType && <span className={styles.badge}>{badgeType}</span>}
            <div className={styles.wishlistContainer}>
                <button 
                    className={styles.wishlistButton}
                    onClick={toggleWishlist}
                    aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    {isInWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
                </button>
                <span className={styles.wishlistLabel}>
                    {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                </span>
            </div>
            <img 
                src={car.imageUrl} 
                alt={`${car.make} ${car.model}`} 
                loading="lazy"
            />
            <div className={styles.details}>
                <h3>{car.make} {car.model}</h3>
                <span className={styles.price}>${car.price.toLocaleString()}</span>
                <div className={styles.specs}>
                    <span>{car.year} • {car.mileage.toLocaleString()} mi</span>
                    <span>{car.fuelType} • {car.transmission}</span>
                </div>
                <div className={styles.features}>
                    {car.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className={styles.feature}>{feature}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarCard;
