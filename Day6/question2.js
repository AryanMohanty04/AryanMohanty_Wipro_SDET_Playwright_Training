const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

function isEligible(product) {
    return product.category === "Electronics" && product.price > 200;
}

function applyPromo(cart, promoCallback) {

    let discountCount = 0;
    let totalSavings = 0;

    const updatedCart = cart.map(product => {

        const eligible = promoCallback(product);

        if (eligible) {

            const discountPrice = product.price * 0.9;

            const savings = product.price - discountPrice;

            discountCount++;

            totalSavings += savings;

            return {
                ...product,
                price: discountPrice,
                isDiscounted: true
            };
        }

        return {
            ...product,
            isDiscounted: false
        };

    });

    console.log(
        `Promotion applied! ${discountCount} items were discounted for a total saving of $${totalSavings}.`
    );

    setTimeout(() => {
        console.log(updatedCart);
    }, 1000);

}

applyPromo(cart, isEligible);