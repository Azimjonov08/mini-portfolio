let elBlock1 = document.getElementById('block-1');
let elBlock2 = document.getElementById('block-2');
let elBlock3 = document.getElementById('block-3');
let elBlock4 = document.getElementById('block-4');

elBlock1.addEventListener('click', (evt) => {
    elBlock1.classList.toggle('b-1-active')
    elBlock1.classList.remove('b-1-active-2')

    const { value: classValue } = elBlock2.classList
    const { value: classValue3 } = elBlock3.classList
    const { value: classValue4 } = elBlock4.classList

    classValue.split(' ').map(item => {
        if (item == 'b-2-active') {
            elBlock1.classList.add('b-1-active')

            elBlock2.classList.remove('b-2-active')
            elBlock2.style.width = '55%'
            elBlock2.style.backgroundColor = '#ebf2e8'

            elBlock3.style.width = '75%'


        }
    })

    classValue3.split(' ').map(item => {
        if (item == 'b-3') {
            elBlock1.classList.add('b-1-active')

            elBlock2.style.width = '55%'

            elBlock3.style.backgroundColor = '#bdcfb5'
            elBlock3.style.width = '75%'

            elBlock3.classList.remove('b-3')
        }
    })

    classValue4.split(' ').map(item => {
        if (item == 'b-4') {
            elBlock1.classList.add('b-1-active')

            elBlock2.style.width = '55%'

            elBlock3.style.backgroundColor = '#bdcfb5'
            elBlock3.style.width = '75%'

            elBlock4.classList.remove('b-4')
        }
    })
})

elBlock2.addEventListener('click', () => {
    elBlock1.classList.add('b-1-active-2')

    elBlock2.style.width = '75%'
    elBlock2.classList.add('b-2-active')
    elBlock2.style.backgroundColor = '#fff'

    elBlock3.style.backgroundColor = '#bdcfb5'
    elBlock3.style.width = '90%'

    elBlock4.style.backgroundColor = '#ebf2e8'
})

elBlock3.addEventListener('click', () => {
    elBlock1.classList.add('b-1-active-2')

    elBlock2.style.width = '24%'
    elBlock2.style.backgroundColor = '#ebf2e8'

    elBlock3.style.width = '86%'
    elBlock3.style.backgroundColor = '#fff'

    elBlock4.style.backgroundColor = '#ebf2e8'

    elBlock3.classList.add('b-3')
})

elBlock4.addEventListener('click', () => {
    elBlock1.classList.add('b-1-active-2')
    elBlock4.classList.add('b-4')

    elBlock2.style.width = '24%'
    elBlock2.style.backgroundColor = '#ebf2e8'

    elBlock3.style.width = '45%'
    elBlock3.style.backgroundColor = '#bdcfb5'

    elBlock4.style.backgroundColor = '#fff'
})
