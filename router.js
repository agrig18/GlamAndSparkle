// document.addEventListener("DOMContentLoaded", function(){

    var products = {"Skin": ["Blush", "Bronzer", "Foundation"],
                    "Eyes": ["Eyebrow", "Eyeliner", "Eyeshadow", "Mascara"],
                    "Lips": ["Lip_liner", "Lipstick"],
                    "Nails": ["Nail_polish"],
                    "AllProducts": ["Blush", "Bronzer", "Foundation", "Eyebrow", "Eyeliner", 
                    "Eyeshadow", "Mascara", "Lip_liner", "Lipstick", "Nail_polish"]};


    let routes = {
        'skin': () => {
            let data = getDataFromApi('Skin');
            for(let i=0; i<data.length; i++){
                createGridProductItem(data[i])
            }
        },
        'eyes': () => {
            let data = getDataFromApi('Eyes');
            for(let i=0; i<data.length; i++){
                createGridProductItem(data[i])
            }
        },
        'lips': () => {
            let data = getDataFromApi('Lips');
            for(let i=0; i<data.length; i++){
                createGridProductItem(data[i])
            }
        },
        'nails': () => {
            let data = getDataFromApi('Nails');
            for(let i=0; i<data.length; i++){
                createGridProductItem(data[i])
            }
        },
        'allproducts': () => {
            let data = getDataFromApi('AllProducts');
            for(let i=0; i<data.length; i++){
                createGridProductItem(data[i])
            }
        }
    }

    let handleRouting = () => {
        let currentUri = window.location.href || false;
        // console.log(currentUri)
        if(currentUri != false){
            currentUri = currentUri.substring(currentUri.indexOf("?f=") + 3);
            // console.log(currentUri);
        }
        routes[currentUri]()
    };


    window.addEventListener('load', handleRouting)
    window.addEventListener('hashchange', handleRouting)

    let getDataFromApi = function(feature_name){
        let feature_products = products[feature_name];        
        var finalObj = [];
        for(let i=0; i<feature_products.length; i++){
            var request = new XMLHttpRequest();        
            request.open('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + feature_products[i], false);
            request.onload = function() {
                if (this.status >= 200 && this.status < 400) {
                    var obj = JSON.parse(this.response);
                    finalObj = finalObj.concat(obj);  
                    finalObjectLength = finalObj.length
                }
            };
            request.send();
        }
        return finalObj;
    }

    // let getDataFromApi = function(feature_name){
    //     let feature_products = products[feature_name];        
    //     // var finalObj = [];
    //     for(let i=0; i<feature_products.length; i++){
    //         fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + feature_products[i])
    //         .then(function(response){
    //             // return JSON.parse(response);
    //             return response.text();
    //         }).then(function(data){
    //             for(let j=0; j<data.length; j++){
    //                 createGridProductItem(data[j])
    //             }
    //         });
    //     }
        
    //     // const response = await fetch('page-data.inc');
    //     // const html = await response.text();
    //     // document.querySelector('.content').innerHTML = html;
    //     // return finalObj;
    // }
    
    function createGridProductItem(product){
        let product_items = document.getElementsByClassName("grid-product-items")[0];

        let product_item = document.createElement("div");
        product_item.classList.add("grid-product-item");

        let product_picture_link = document.createElement("a");
        
        let product_picture = document.createElement("img");
        product_picture.setAttribute("width", "300px");
        product_picture.setAttribute("height", "300px");
        product_picture.src = product.image_link;

        let product_info = document.createElement("ul");
        product_info.classList.add("product-info");

        let product_title_link = document.createElement("a");

        let product_title = document.createElement("li");
        product_title.classList.add("product-title")
        product_title.innerHTML = product.name;

        let product_price = document.createElement("li");
        product_price.classList.add("product-price")
        product_price.innerHTML = "$" + product.price + " USD";

        // let product_stars = document.createElement("li");
        // product_stars.classList.add("product-stars")
        // product_stars.innerHTML = product.rating;

        let product_add_to_bag = document.createElement("button");
        product_add_to_bag.classList.add("add-to-bag");
        product_add_to_bag.innerHTML = "ADD TO BAG";

        product_picture_link.appendChild(product_picture);
        product_title_link.appendChild(product_title);
        product_info.appendChild(product_title_link);
        product_info.appendChild(product_price);
        // product_info.appendChild(product_stars);
        product_item.appendChild(product_picture_link);
        product_item.appendChild(product_info);
        product_item.appendChild(product_add_to_bag);
        product_items.appendChild(product_item);
    }

// })