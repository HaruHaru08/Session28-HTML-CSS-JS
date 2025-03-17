//1.Tạo object
const person={
    personName: "Tạ Xuân Chiến",
    age: 18,
    address:"Hà Nội",
    isMarried:false,
};

// const student=new Object();
// student.studentName="Trần Khánh An";
// student.age=18;

//2.Truy cập vào object
console.log("Person Name: ",person.personName);
console.log("Person age: ",person.age);

const key="personName";

console.log("Person name: ", person["personName"]);

console.log("Person address: ",person["address"]);

//Truy xuất đối tượng với Destrucstring assigment
const{personName,address,age,isMarried}=person;
console.log(personName,address,age,isMarried)
//3.Thêm thuộc tính cho object
person.height=170;//Thêm cho đối tượng person 1 thuộc tính là height
person.weight="Thin";//Thêm cho đối tượng person 1 thuộc tính là weight
console.log("Person sau khi được thêm thuộc tính: ",person);
//4.Cập nhập giá trị
person.personName="Trịnh Trung Hiếu";
person.age =25;

 console.log("Person sau khi được cập nhập: ",person);
//5.Xóa thuộc tính của object
delete person.isMarried;
delete person.personName;
console.log("Person sau khi được xóa: ",person);

//Tạo mảng đối tượng
const teachers=[
    {
        id:1,
        teacherName:"Ngô Quang Anh",
        age:20,
    },
    {
        id:2,
        teacherName:"Tạ Xuân Chiến",
        age:18,
    },
];
console.table(teachers);

//Duyệt qua đối tượng
for(const key in person){
    console.log("Key: ",key)
    console.log("Value: ",person[key]);
}

//Lấy ra danh sách các key của object
console.log("Danh sách key của object person: ",Object.keys(person));
console.log("Danh sách value của object person: ",Object.values(person));

//Optional channing
const user={
    name:"Alice",
};
console.log("City: ",user?.address?.city);
