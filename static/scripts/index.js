const logoNode = document.querySelector('.logo')
const codeQueryNode = document.querySelector('.code-query')

logoNode.addEventListener('click', function() {
    throwQuery(codeQueryNode)
})

function throwQuery(node) {
    console.log(node.value)
}

