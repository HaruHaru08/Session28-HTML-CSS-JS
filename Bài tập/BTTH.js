//B1: Tạo menu(Dung vòng lặp do-While(end khi lựa chọn = 6))
//1.1:Hiển thị lựa chọn cho người dùng
//1.2:Lấy được lựa chọn từ người dùng
//B2:Kiểm tra lựa chọn từ người dùng
//B3:Thực hiện các logic bên trong từng lựa chọn

let choice;
const products=[];
do {
  choice = +prompt(
    `
        Mời bạn nhập lựa chọn:
        1.Thêm sản phẩm
        2.Sửa thông tin sản phẩm
        3.Xóa sản phẩm theo id
        4.In danh sách sản phẩm
        5.Tìm kiếm sản phẩm theo tên
        6.Thoát chương trình
    `
  );

  switch (choice) {
    case 1:
        //Lấy được thông tin sản phẩm từ người dùng
        const productNameInput=prompt("Nhập tên sản phẩm");
        const productPriceInput=+prompt("Nhập giá sản phẩm");

        //Gom nhóm tất cả dữ liệu từ người dùng thành 1 object duy nhất
        const newProduct={
            id:Math.ceil(Math.random()*1000000000000000),
            productName:productNameInput,
            price:productPriceInput,
        };
        //Push đối tượng newProduct vào trong 1 mảng
        products.push(newProduct);

        //Hiện thị thông báo
        alert("Thêm sản phẩm thành công");

        break;
    case 2:
        
        break;
    case 3:
        //Lấy được id cần xóa
        const idDelete=+prompt("Nhập id của sản phẩm cần xóa");

        //Tìm kiếm vị trí phần tử trong mảng theo id
        const findIndexProductDelete =products.findIndex((product)=> product.id===idDelete);
        //Kiểm tra xem là id đó có tồn tại trong mảng hay không
        if(findIndexProductDelete!==-1){
            //Lấy ra tên của sản phẩm cần xóa
            const productNameDelete= products[findIndexProductDelete].productName;
            //Lấy xác nhận xóa từ người dùng
            const confirmDelete=confirm(
                `Bạn có chắc chắn muốn xóa sản phẩm ${productNameDelete} này không?`
            );

            if(confirmDelete){
                //Tiến hành xóa
                products.splice(findIndexProductDelete,1)
                //Thông báo ra màn hình
                alert("Xóa thành công");
            }
        }
        break;
    case 4:
        console.table(products);
        break;
    case 5:
        
        break;
    case 6:
        console.log("Cảm ơn vì đã sử dụng ứng dụng")
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
        break;
  }
} while (choice !== 6);
