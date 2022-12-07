class ProductManager {
    static contadorId = 0;
    constructor(){
        this.product = [];
    }


    addProduct(title,description,price,img,code,stock){

      if(!code){
        return 'Complete el campo: CODE'
      }else{
        const productoCreado = {
                id: ProductManager.contadorId ++,
                title,
                description,
                price,
                img,
                code,
                stock
    
    
            }
        
          const validacion = this.product.find(element => element.code === code)
         if(!validacion){
          this.product.push(productoCreado);
           return
         }else{
             console.error('Codigo ocupado')

         }
         
          
      }
   

            
      

    }

    getProducts(){
        return this.product;
    }
  
   getProductById(id){
        const findProduct = this.product.find(element => element.id === id)
        if(!findProduct){
            return 'Product not found'
        }else{
          return 'Product found'
        }
        

           
        
    }
  

   
            
  

}

const productManager = new ProductManager;

productManager.addProduct('Samsung Galaxy 22 Ultra','Pantalla Dynamic AMOLED 2X de 6.8', 382.999,'foto tv',11234,20);
productManager.addProduct('Samsung Galaxy 22','Pantalla Dynamic AMOLED 2X de 6.1', 249.999,'foto tv',11235,20);
productManager.addProduct('Samsung Galaxy 22 Plus','Pantalla Dynamic AMOLED 2X de 6.6', 289.900,'foto tv',11236,20);

console.log(productManager.getProducts());
console.log(productManager.getProductById());