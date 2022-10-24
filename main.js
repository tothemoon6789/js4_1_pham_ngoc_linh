

const demo = document.getElementById("demo");
document.getElementById("li_bai1").onclick = () => {

    demo.innerHTML = "";
    const inputBai11 = createElement("input");
    const inputBai12 = createElement("input");
    const inputBai13 = createElement("input");
    const buttonBai11 = createElement("button");
    // const tieudeBai11 = createElement("");
    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần."
    demo.appendChild(heading);
    setAttributeForElement(inputBai11);
    setAttributeForElement(inputBai12);
    setAttributeForElement(inputBai13);




    buttonBai11.innerHTML = "Hiện giá trị tăng dần";
    demo.appendChild(buttonBai11);

    buttonBai11.onclick = () => {
        var text = "Chuỗi giá trị tăng dần: ";
        const v1 = inputBai11.value * 1;
        const v2 = inputBai12.value * 1;
        const v3 = inputBai13.value * 1;
        if (v1 < v2 && v1 < v3) {
            text += v1 + " ,";
            if (v2 < v3) {
                text += v2 + "," + v3;
            } else {
                text += v3 + "," + v2;

            }
        } else if (v2 < v1 && v2 < v3) {

            text += v2 + ",";
            if (v1 < v3) {
                text += v1 + "," + v3;
            } else {
                text += v3 + "," + v1;

            }
        } else if (v3 < v1 && v3 < v2) {
            text += v3 + ",";
            if (v1 < v2) {
                text += v1 + "," + v2;
            } else {
                text += v2 + "," + v1;

            }
        }
        buttonBai11.innerHTML = text;
    }


    function setAttributeForElement(element) {
        Object.assign(element, {
            placeholder: "Nhập số nguyên",
            type: "number"
        })
        demo.appendChild(element);
    }

}
// BÀI 2
document.getElementById("li_bai2").onclick = () => {
    demo.innerHTML = "";


    const b2_select = createElement("select");

    const b2_option1 = createElement("option");
    const b2_option2 = createElement("option");
    const b2_option3 = createElement("option");
    const b2_option4 = createElement("option");

    const b2_answer = createElement("p");
    const b2_btn = createElement("button");
    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 2: Viết chương trình Chào hỏi các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)."

    demo.appendChild(heading);
    setOption(b2_option1, "Bố")
    setOption(b2_option2, "Mẹ")
    setOption(b2_option3, "Anh trai")
    setOption(b2_option4, "Em gái")
    b2_btn.innerHTML = "Tạo lời chào !"


    b2_select.appendChild(b2_option1);
    b2_select.appendChild(b2_option2);
    b2_select.appendChild(b2_option3);
    b2_select.appendChild(b2_option4);
    demo.appendChild(b2_select);
    demo.appendChild(b2_answer);
    demo.appendChild(b2_btn);
    b2_btn.onclick = () => {
        b2_answer.innerHTML = "Xin chào " + b2_select.value;
    }

}
document.getElementById("li_bai3").onclick = () => {
    demo.innerHTML = "";
    const inputBai31 = createElement("input");
    const inputBai32 = createElement("input");
    const inputBai33 = createElement("input");
    const buttonBai31 = createElement("button");

    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 3: Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn."
    demo.appendChild(heading);
    setAttributeForElement(inputBai31);
    setAttributeForElement(inputBai32);
    setAttributeForElement(inputBai33);


    buttonBai31.innerHTML = "Kết quả";
    demo.appendChild(buttonBai31);
    buttonBai31.onclick = () => {
        var soChan = 0;
        var soLe = 0;

        if ((inputBai31.value * 1) % 2 == 0) {
            soChan++;
        } else {
            soLe++;
        }
        if ((inputBai32.value * 1) % 2 == 0) {
            soChan++;
        } else {
            soLe++;
        }
        if ((inputBai33.value * 1) % 2 == 0) {
            soChan++;
        } else {
            soLe++;
        }




        buttonBai31.innerHTML = "Có: " + soChan + " số chẵn " + " và " + soLe + " số lẻ";
    }


    function setAttributeForElement(element) {
        Object.assign(element, {
            placeholder: "Nhập số nguyên",
            type: "number"
        })
        demo.appendChild(element);
    }


}
document.getElementById("li_bai4").onclick = () => {
    demo.innerHTML = "";
    const inputBai11 = createElement("input");
    const inputBai12 = createElement("input");
    const inputBai13 = createElement("input");
    const buttonBai11 = createElement("button");

    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 4: Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?"
    demo.appendChild(heading);
    setAttributeForElement(inputBai11);
    setAttributeForElement(inputBai12);
    setAttributeForElement(inputBai13);


    buttonBai11.innerHTML = "Phỏng đoán";
    demo.appendChild(buttonBai11);
    buttonBai11.onclick = () => {

        const v1 = inputBai11.value * 1;
        const v2 = inputBai12.value * 1;
        const v3 = inputBai13.value * 1;
        var a = 0;
        var b = 0;
        var c = 0;
        if (v1 == 0 || v2 == 0 || v3 == 0) {
            alert("Nhập đủ số vào ô trống !");
        } else {
            if (v1 - v2 == 0 && v1 - v3 == 0) {
                buttonBai11.innerHTML = "Tam giác đều";
            } else if (v1 - v2 == 0 || v1 - v3 == 0) {
                buttonBai11.innerHTML = "Tam giác cân";
            } else if (v1 < v2 && v1 < v3) {
                a = v1;
                if (v2 < v3) {
                    b = v2;
                    c = v3;
                    if (c * c == (a * a + b * b)) {
                        buttonBai11.innerHTML = "Tam giác vuông";
                    } else {

                        buttonBai11.innerHTML = "Tam giác bình thường";
                    }
                } else {
                    b = v3;
                    c = v2;
                    if (c * c == (a * a + b * b)) {
                        buttonBai11.innerHTML = "Tam giác vuông";
                    } else {

                        buttonBai11.innerHTML = "Tam giác bình thường";
                    }

                }
            } else if (v2 < v1 && v2 < v3) {

                a = v2;
                if (v1 < v3) {
                    b = v1;
                    c = v3;
                    if (c * c == (a * a + b * b)) {
                        buttonBai11.innerHTML = "Tam giác vuông";
                    } else {

                        buttonBai11.innerHTML = "Tam giác bình thường";
                    }
                } else {
                    b = v3;
                    c = v1
                    if (c * c == (a * a + b * b)) {
                        buttonBai11.innerHTML = "Tam giác vuông";
                    } else {

                        buttonBai11.innerHTML = "Tam giác bình thường";
                    }

                }
            } else if (v3 < v1 && v3 < v2) {
                a = v3;
                if (v1 < v2) {
                    b = v1;
                    c = v2;
                    if (c * c == (a * a + b * b)) {
                        buttonBai11.innerHTML = "Tam giác vuông";
                    } else {

                        buttonBai11.innerHTML = "Tam giác bình thường";
                    }
                } else {
                    b = v2;
                    c = v1;
                    if (c * c == (a * a + b * b)) {
                        buttonBai11.innerHTML = "Tam giác vuông";
                    } else {

                        buttonBai11.innerHTML = "Tam giác bình thường";
                    }

                }
            }

        }
    }

    function setAttributeForElement(element) {
        Object.assign(element, {
            placeholder: "Nhập số nguyên",
            type: "number"
        })
        demo.appendChild(element);
    }

}
// set option 
function setOption(element, value, content) {
    element.setAttribute("value", value);
    element.innerHTML = value;
}
// FUNCTION DUNG CHUNG
function createElement(element) {
    return document.createElement(element);
}
