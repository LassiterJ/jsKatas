function isTriangle(a, b, c) {
    const cases = {
        case1: c + b > a,
        case2: a + c > b,
        case3: a + b > c
    };
    let formulas = Object.values(cases);
    let answer = (formulas.includes(false)) ? false : true;
    return answer

}



