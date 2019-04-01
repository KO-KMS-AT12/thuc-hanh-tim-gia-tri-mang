function find(arr) {
    let value = parseInt(prompt("Nhap vao 1 so bat ki"))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            document.write("Value " + arr[i] + " found at " + i);
        }
    }
}

find([1, 8, 5, 3, 4, 2, 6, 0, 9, 7])