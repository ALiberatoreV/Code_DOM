const main = document.querySelector('main');

const joke1 = "Two cannibals are eating a comedian. One turns to the other and asks Does this taste funny to you?"

const joke2 = "my grandfather has the heart of a lion and a lifetime ban from the zoo"

const joke3 = " Do you want to hear a construction joke? Sorry, I’m still working on it."

const p = document.createElement('p');

main.appendChild(p);
p.textContent = "That's all folks!"
const temp = `
    <section> 
        <h1>My Jokes</h1>
        <ul>
            <li> ${joke1} </li>
            <li> ${joke2} </li>
            <li> ${joke3} </li>
        
        </ul>
    
    
    </section>
`;

main.innerHTML = temp;