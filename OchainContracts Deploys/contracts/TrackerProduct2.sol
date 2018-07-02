pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;
contract TrackerProduct {

   uint256 public productId;

  function getProductId() public returns (uint256) {
    return productId++;
  }
  struct Product {
        uint256 id;
        string nameProduct;
        address addressFather;
        string productionDate;
        string manufacturer;
        string tracker;
    }
  mapping (uint256 => Product) products;
  uint256[] public productSetters;
  Product[] public productsArr;

 function concat(string _a, string _b) internal pure returns (string) {
        bytes memory bytes_a = bytes(_a);
        bytes memory bytes_b = bytes(_b);
        string memory length_ab = new string(bytes_a.length + bytes_b.length);
        bytes memory bytes_c = bytes(length_ab);
        uint k = 0;
        for (uint i = 0; i < bytes_a.length; i++) bytes_c[k++] = bytes_a[i];
        for (i = 0; i < bytes_b.length; i++) bytes_c[k++] = bytes_b[i];
        return string(bytes_c);
    }
  
  function registerProduct(string _nameProduct,string _productionDate, string _manufacturer, string _trackerProgress) public {
      uint index= getProductId();
      Product storage  product =products[index];
      product.id = index;
      product.nameProduct = _nameProduct;
      product.addressFather = msg.sender;
      product.productionDate = _productionDate;
      product.manufacturer = _manufacturer;
      _trackerProgress = concat("-",_trackerProgress);
      product.tracker = concat(product.tracker,_trackerProgress);
      productSetters.push(index);
  }
    function getProductSetters() view public returns(uint256[]) {
        return productSetters;
    }
    
    function getProduct(uint256 ind) view public returns (uint256,string, string, string, string) {
        return (products[ind].id,products[ind].nameProduct, products[ind].productionDate, products[ind].manufacturer,products[ind].tracker);
    }
   
    function countProductSetters(address _address) view public returns (uint) {
        return productSetters.length;
    }




}
