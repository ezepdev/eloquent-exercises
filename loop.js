// function my own loop for

function loop(value,condition,update,body) {
    if (!condition(value)) return;
    body(value)
    let updatedValue = update(value)
    loop(updatedValue,condition,update,body)
}
