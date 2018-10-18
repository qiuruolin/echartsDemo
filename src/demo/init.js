module.exports = function () {
    const main = document.getElementById("main")

    let count = 0
    const limit = 10

    while (count++ < limit) {
        const test = document.createElement('div')
        test.setAttribute('id', 'test' + count)
        test.className = "test"
        main.appendChild(test)
    }
}()