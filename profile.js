const changeElementsColors = ()=>{
    const body = document.getElementsByTagName('body')[0]
    const day = new Date().getDay()
    const month = new Date().getMonth() + 1
    const year = Number(new Date().getFullYear().toString().slice(1))
    const bodyTodayColor = `rgb(${month},${day},${year})`
    body.style.backgroundColor = bodyTodayColor

    const everydayElement = document.getElementById('everyday-color')
    const everydayTodayColor = `rgb(${day},${year},${month})`
    everydayElement.style.color = everydayTodayColor
    
}

changeElementsColors()
