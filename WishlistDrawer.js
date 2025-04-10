import React, { useEffect, useState } from 'react';
import styles from './WishlistDrawer.module.css';
import CarCard from './CarCard';

const WishlistDrawer = ({ isOpen, onClose }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlist(storedWishlist);
    }, [isOpen]);

    const handleRemoveFromWishlist = (updatedWishlist) => {
        setWishlist(updatedWishlist);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
                <h2>My Wishlist ({wishlist.length})</h2>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
            </div>
            
            <div className={styles.wishlistContent}>
                {wishlist.length === 0 ? (
                    <p className={styles.emptyMessage}>Your wishlist is empty</p>
                ) : (
                    <div className={styles.wishlistItems}>
                        {wishlist.map(car => (
                            <CarCard 
                                key={car.id} 
                                car={car} 
                                onWishlistToggle={handleRemoveFromWishlist}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistDrawer;
