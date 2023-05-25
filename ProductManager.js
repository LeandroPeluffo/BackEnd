const fs = require('fs');

class ProductManager {
  constructor(){
    this.product = [];
    this.path = ('C:\Users\USUARIO\Documents\Coder\BackEnd\Productos.json');
  }

  validateCode(arr){
    if(arr.length){
      let codeMayor = arr.reduce((p,c)=> {
        return c.id > p ? c.id : p;
      }, 0);
      return codeMayor + 1;
    }
    return 1;
  }



  getProduct(){
    return this.product = JSON.parse(this.product);
  }

  getProductById(arr, id){
    return(arr.filter(obj => obj.id !== id));
    console.error("not found");
  }


  addProduct(obj){
    let { title, description, price, thumbnail, code, stock } = obj;
    let product = this.product.filter(product => product.code === code);
    this.product.push({
      ...product[0],
      id: this.validateCode(this.product),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    })
  }

  updateProduct(id, obj){

  }

  deleteProduct(obj){


  }
}


///////

let PRD = new ProductManager();

console.log(PRD.getProduct()); 

PRD.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25

});

console.log(PRD.getProduct());

PRD.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25

});

