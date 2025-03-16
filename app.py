# Flask Backend (app.py)
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Updated product data with 4 items per category
products = {
    "Electronics": [
        {"id": 1, "name": "Laptop", "price": 800, "image": "static/images/laptop.avif"},
        {"id": 2, "name": "Smartphone", "price": 500, "image": "static/images/smartphone.avif"},
        {"id": 3, "name": "Tablet", "price": 300, "image": "static/images/tablet.avif"},
        {"id": 4, "name": "Smartwatch", "price": 200, "image": "static/images/smartwatch.avif"}
    ],
    "Groceries": [
        {"id": 5, "name": "Rice (5kg)", "price": 10, "image": "static/images/rice.jpg"},
        {"id": 6, "name": "Vegetable Pack", "price": 15, "image": "static/images/vegetablepack.avif"},
        {"id": 7, "name": "Milk (1L)", "price": 2, "image": "static/images/milk.avif"},
        {"id": 8, "name": "Eggs (12 Pack)", "price": 5, "image": "static/images/eggs.avif"}
    ],
    "Food": [
        {"id": 9, "name": "Burger", "price": 5, "image": "static/images/burger.avif"},
        {"id": 10, "name": "Pizza", "price": 12, "image": "static/images/pizza.avif"},
        {"id": 11, "name": "Pasta", "price": 8, "image": "static/images/pasta.avif"},
        {"id": 12, "name": "Ice Cream", "price": 6, "image": "static/images/icecream.avif"}
    ],
    "Fashion": [
        {"id": 13, "name": "T-Shirt", "price": 20, "image": "static/images/t-shirt.avif"},
        {"id": 14, "name": "Jeans", "price": 40, "image": "static/images/jeans.avif"},
        {"id": 15, "name": "Sneakers", "price": 60, "image": "static/images/sneakers.avif"},
        {"id": 16, "name": "Jacket", "price": 80, "image": "static/images/jacket.avif"}
    ]
}

@app.route('/')
def home():
    return render_template('index.html', products=products)

@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    return jsonify({"message": "Product added to cart", "product": data})

if __name__ == '__main__':
    app.run(debug=True)