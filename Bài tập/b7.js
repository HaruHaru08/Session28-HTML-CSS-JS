let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];
function medium(students){
    let medium=0;
    for (const i in students) {
        medium=(students[i].scores.math+students[i].scores.english+students[i].scores.literature)/3;
        if(medium>=8){
            console.log(students[i].name);
        }
    }
}
medium(students);