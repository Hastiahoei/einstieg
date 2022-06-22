     const init = () => {
        
        const header = document.querySelector('h1');
        console.log( header.innerText );
    }
    
    document.addEventListener('DOMContentLoaded', init);







    let header;

    const output = () => {
        console.log( header.innerText );
    }

    const init = () => {
        header = document.querySelector('h1');
        output();
    }
    
    document.addEventListener('DOMContentLoaded', init);







    const elements = {};

    const output = () => {
        console.log( elements.header.innerText );
    }

    const domMapping = () => {
        elements.header = document.querySelector('h1');
    }

    const init = () => {
        domMapping();
        output();
    }
    
    document.addEventListener('DOMContentLoaded', init);





    const output = () => {
        for ( let i = 0; i < elements.pTags.length; i++){
            let pTag = elements.pTags[i];
            console.log(pTag.innerText);
        }
    }

    const domMapping = () => {
        elements.header = document.querySelector('h1');
        elements.pTags = Array.from(document.querySelectorAll('p'));
    }

    const init = () => {
        domMapping();
        output();
    }
    
    document.addEventListener('DOMContentLoaded', init);




    const elements = {};

    const output = () => {
        for (let pTag of elements.pTags) {
            console.log(pTag.innerText);
        }
    }

    const domMapping = () => {
        elements.header = document.querySelector('h1');
        elements.pTags = Array.from(document.querySelectorAll('p'));
    }

    const init = () => {
        domMapping();
        output();
    }

    document.addEventListener('DOMContentLoaded', init);


    


    const elements = {};

    const output = () => {
        for (let pTag of elements.pTags) {
            console.log(pTag.innerText);
        }
    }

    const domMapping = () => {
        elements.header = document.querySelector('h1');
        elements.pTags = Array.from(document.querySelectorAll('p.hallo'));
    }

    const init = () => {
        domMapping();
        output();
    }

    document.addEventListener('DOMContentLoaded', init);



    const output = () => {
        for (let el of elements.welt) {
            el.classList.add('highlight');
        }
    }

    const domMapping = () => {
        elements.header = document.querySelector('h1');
        elements.pTags = Array.from(document.querySelectorAll('p.hallo'));
        elements.welt = Array.from(document.querySelectorAll('.hallo'));
    }

    const init = () => {
        domMapping();
        output();
    }

    document.addEventListener('DOMContentLoaded', init);








    