const options = document.querySelectorAll('.option')
const contents = document.querySelectorAll('.content')

options.forEach((option,index)=>{
    option.addEventListener('click',()=>{
        contents.forEach((content,i)=>{
            if(index === i){
                content.style.display = 'block'
                options[i].querySelector('span').classList.add('active')
                

            }else{
                content.style.display = 'none'
                options[i].querySelector('span').classList.remove('active')
            }
        })
    })
})



const pricing_heads = document.querySelectorAll('.pricing-option');
const pricing_content = document.querySelectorAll('.pricing-content');

pricing_heads.forEach((head,index)=>{
    head.addEventListener('click',()=>{
        pricing_content.forEach((p,i)=>{
            if(index === i){
                p.style.display = 'table'
                pricing_heads[i].querySelector('span').classList.add('pricing-active')
                

            }else{
                p.style.display = 'none'
                pricing_heads[i].querySelector('span').classList.remove('pricing-active')
            }
        })
    })
})



const faq_heads = document.querySelectorAll('.faq-head')
const faq_contents = document.querySelectorAll('.faq-content')
faq_heads.forEach((head,index)=>{
    head.addEventListener('click',()=>{
        // console.log(head)
        faq_contents.forEach((content,i)=>{
            if(index === i){
                // console.log(content)
                content.style.maxHeight = '200px'
                faq_heads[i].querySelector('i').style.transform = 'rotate(180deg)'
            }else{
                content.style.maxHeight = '0px'
                faq_heads[i].querySelector('i').style.transform = 'rotate(360deg)'
            }
        })
    })
})