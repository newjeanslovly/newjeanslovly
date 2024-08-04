const data = {
    "이름(R)" : "계좌번호 : xxxx-xxxx-xxxx-xxxx / 등록된 잔액 : x원 / 계좌 생성일 : XX년 XX월 XX일",
    "고유번호(R)" : "계좌번호 : xxxx-xxxx-xxxx-xxxx / 등록된 잔액 : x원 / 계좌 생성일 : XX년 XX월 XX일"
};
const data1 = {
    "이름(R)" : "직급 : XX",
    "고유번호(R)" : "직급 : XX"
};

function search() {
    const input = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');
    
    if (data[input]) {
        resultDiv.textContent = data[input];
    } else {
        resultDiv.textContent = "정보를 찾을 수 없습니다.";
    }
}

function search() {
    const input = document.getElementById('searchInput1').value;
    const resultDiv = document.getElementById('result1');
    
    if (data1[input]) {
        resultDiv.textContent = data1[input];
    } else {
        resultDiv.textContent = "직원을 찾을 수 없습니다.";
    }
}
