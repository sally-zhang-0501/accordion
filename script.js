const accordionHandler = () => {
    const accordions = document.querySelectorAll('.accordions-container')

    if (accordions?.length > 0) {
        accordions.forEach(accordion => {
            const accordionItems = accordion.querySelectorAll('.accordion-item')
            if (accordionItems?.length > 0) {
                accordionItems.forEach(item => {
                    $('.item-body', item).hide()
                    $('.item-header', item).click(function () {
                        if ($(item).hasClass('expanded')) {
                            $('.item-body', item).slideUp()
                            $(item).removeClass('expanded')
                        } else {
                            $('.item-body', item).slideDown()
                            $(item).addClass('expanded')
                            $(item).siblings().removeClass('expanded')
                            $('.item-body', $(item).siblings()).slideUp()
                            
                        }
                    })
                })
            }
        })
    }
}

window.addEventListener('DOMContentLoaded',() => {
    accordionHandler()
})