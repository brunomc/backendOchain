pragma solidity ^0.4.18;

contract TrackerProduct {

  string nameProduct;
  string productionDate;
  string manufacturer;
  string tracker;
  string trackerProgress;

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
     nameProduct = _nameProduct;
     productionDate = _productionDate;
     manufacturer = _manufacturer;
     tracker =concat(tracker,_trackerProgress);

  
  }

  function getProduct() view public returns (string,string,string,string){
    return (nameProduct,productionDate,manufacturer,tracker);
  }


}
