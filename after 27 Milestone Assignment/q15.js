// Arrow function to calculate percentage of discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the percentage of discount
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    
    // Round off the discount percentage to two decimal places
    return Math.round(discountPercentage * 100) / 100;
  };
  
  // Example usage:
  const originalPrice = 100;
  const discountedPrice = 75;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  console.log(`Original price: $${originalPrice}`);
  console.log(`Discounted price: $${discountedPrice}`);
  console.log(`Discount percentage: ${discountPercentage}%`);
  