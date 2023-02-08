const changeElementsColors = ()=>{
    const body = document.getElementsByTagName('body')[0]
    const day = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = Number(new Date().getFullYear().toString().slice(1))
    const bodyTodayColor = `rgb(${year},${month},${day})`
    body.style.backgroundColor = bodyTodayColor

    const everydayElement = document.getElementById('everyday-color')
    const everydayTodayColor = `rgb(${day},${year},${month})`
    everydayElement.style.color = everydayTodayColor
    
}

changeElementsColors()
