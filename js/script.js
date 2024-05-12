document.addEventListener("DOMContentLoaded", () => {
    // Obtener el botón de recarga
    const reload = document.getElementById('reload');

    // Agregar un event listener para recargar las citas al hacer clic en el botón
    reload.addEventListener('click', () => {
        updateQuoteDaily();
    });

    // Obtener la cita diaria y mostrar todas las citas cuando se carga la página
    getQuoteDaily();
    showQuotes();

    // Configurar un intervalo para actualizar las citas diariamente
    setInterval(() => {
        cleanLocalStorage();
        getQuoteDaily();
    }, 24 * 60 * 60 * 1000); 
});

// Function with quotes
const allQuotes = () => {
    const list = [
        'When you are young, they assume you know nothing',
        'You drew stars around my scars, but now I’m bleedin’',
        'We’re happy, free, confused and lonely at the same time',
        'You know, the greatest films of all time were never made',
        'And if you never bleed, you’re never gonna grow',
        'If one thing had been different, would everything be different today?',
        'It’s like I got this music in my mind saying it’s gonna be alright',
        'When everyone believes ya, what’s that like?',
        'Leave it all behind and there is happiness',
        'I’m damned if I do give a damn what people say',
        'I feel you, no matter what',
        'And I wake with your memory over me, that’s a real fucking legacy to leave',
        'I’ll stare directly at the Sun, but never in the mirror, it must be exhausting always rooting for the anti-hero',
        'And it’s like snow at the beach, weird, but fucking beautiful',
        'Life is emotionally abusive',
        'You say, "I don’t understand," and I say, "I know you don’t"',
        '‘Cause all of my enemies started out friends',
        'I broke his heart ‘cause he was nice, he was sunshine, I was midnight rain',
        'I guess sometimes we all get some kind of haunted, and I never think of him, except on midnights like this',
        'Don’t get sad, get even',
        'I’m only 17, I don’t know anything, but I know I miss you',
        'Sometimes you just don’t know the answer ‘til someone’s on their knees and asks you',
        'Can I go where you go? Can we always be this close, forever and ever?',
        'Swear to be overdramatic and true to my lover, and you’ll save all your dirtiest jokes for me, and at every table, I’ll save you a seat',
        'Karma’s a relaxing thought, aren’t you envious that for you it’s not?',
        'I’m getting tired, even for a phoenix, always rising from the ashes',
        'You don’t know what you got until it’s gone',
        '"She would’ve made such a lovely bride, what a shame she’s fucked in the head", they said',
        'How long could we be a sad song? Till we were too far gone to bring back to life?',
        'I gave you all my best me’s, my endless empathy, and all I did was bleed as I tried to be the bravest soldier',
        'I trace the evidence, make it make some sense, why the wound is still bleeding?',
        'Don’t know what’s down this road, I’m just walking',
        'I just realized everything I have is someday gonna be gone',
        'I swear I don’t love the drama, it loves me',
        'And I wouldn’t marry me either. A pathological people pleaser. Who only wanted you to see her',
        'It’s me, hi, I’m the problem, it’s me',
        'Remember lookin’ at this room, we loved it ‘cause of the light. Now, I just sit in the dark and wonder if it’s time...',
        'I’ll be the actress starring in your bad dreams',
        'You taught me bout your past, thinking your future was me',
        'I’m a mess, but I’m the mess that you wanted',
        'We could leave the Christmas lights up till January, this is our place, we make the rules',
        'Darling you had turned my bed into a sacred oasis',
        'Love is a ruthless game unless you play it good and right',
        'Never be so kind, you forget to be clever',
        'You showed me colors, you know I can’t see with anyone else',
        'My thoughts will echo your name until I see you again',
        'I could build a castle out of all the bricks they threw at me',
        'I see your face in every crowd',
        'Who you are is not what you did',
        'I’m taking pictures in my mind so I can save them for a rainy day',
        'Tomorrow’s just a mystery but that’s okay',
        'Only bought this dress so you could take it off',
        'I don’t know why but with you I’d dance in a storm in my best dress, fearless',
        'Our song is the way you laugh',
        'Do I throw out everything we built or keep it?',
        'Even in my worst lies, you saw the truth in me',
        'You taught me a secret language I can’t speak with anyone else',
        'It’s you and me, that’s my whole world',
        'I can’t let you go, your handprints on my soul',
        'Isn’t it just so pretty to think, all alone there was some invisible string tying you to me',
        'Every time I look at you, it’s like the first time',
        'My heart, my hips, my body, my love. Tryna find a part of me that you didn’t touch',
        'Quiet my fears with the touch of your hand',
        'Ocean blue eyes looking in mine, I feel like I might sink and drown',
        'Wanna need you forever',
        'Why do you have to make me feel small so you can feel whole inside?',
        'Midnights become my afternoons when my depression works the graveyard shift',
        'You were my town, now I’m in exile',
        'My face was gray, but you wouldn’t admit that we were sick',
        'Why do you have to put down my dreams so you’re the only thing on my mind?',
        'I’ve never been anywhere cold as you',
        'Time breaks down your mind and body, don’t you let it touch your soul',
        'I can go anywhere I want, just not home',
        'Saying goodbye is death by a thousand cuts',
        'You kept me like a secret, but I kept you like an oath',
        'Wondering why we bother with love, if it never last',
        'You gave me roses and I left them there to die',
        'I broke my own heart ‘cause you were too polite to do it',
        'You call me up again just to break me like a promise, so casually cruel in the name of being honest',
        'I think I’ve seen this film before and I didn’t like the ending',
        'I don’t remember who I was before you painted all my nights a color I’ve searched for since',
        'We’re not speaking and I’m dying to know, is it killing you like it’s killing me?',
        'What do you do when the one who means the most to you is the one who didn’t show?',
        'I’ll be gettin’ over you my whole life',
        'The drought was the very worst when the flowers that we’d grown together died of thirst',
        'I’ve never heard silence quite this loud',
        'I’m shinning like fireworks over your sad empty town',
        'I’ll be strong, I’ll be wrong, oh but life goes on',
        'Everything you lose is a step you take. So, take the friendship bracelets, take the moment and taste it, you’ve got no reason to be afraid',
        'If a man talks sh*t, then I owe him nothing',
        'And will you still want me when I’m nothing new?',
        'Will you take a moment? Promise me this. That you’ll stand by me forever',
        'Just breathe, just relax, it’ll be okay',
        'I bet you couldn’t believe when you realized I’m harder to forget than I was to leave',
        'Get off our knees, fight for what we’ve worked for all these years',
        'I rose up from the dead, I do it all the time',
        'God rest my soul, I miss who I used to be',
        'I’ll leave my window open. ‘Cause I’m too tired at night to call your name. Just know I’m right here hoping. That you’ll come in with the rain',
        'If you have children someday. When they point to the pictures. Please tell them my name',
        'I wanna be defined by the things that I love. Not the things I hate. Not the things that I’m afraid of, I’m afraid of. Not the things that haunt me in the middle of the night. I, I just think that. You are what you love',
        'For the boys who broke my heart now I send their babies presents',
        'All they keep asking me is if I’m gonna be your bride, the only kinda girl they see is a one-night or a wife',
        'My reputation’s never been worse, so you must like me for me',
        'I see it all now, it was wrong, don’t you think nineteen’s too young',
        'I don’t wanna look at anything else now that I saw you',
        'And I damn sure never would’ve danced with the devil',
        'But maybe this thing was a masterpiece `til you tore it all up',
        'Give me back my girlhood, it was mine first',
        'In the middle of the night, in my dreams, you should see the things we do',
        'They tell you while you’re young "girls, go out and have fun" then they hunt and slay the ones who actually do it',
        'We might still be in love if you were a better man',
        'How can a person know everything at 18 but nothing at 22?',
        'I had the time of my life fighting dragons with you',
        'I regret you all the time',
        'And I miss you, but I miss sparkling',
        'Take me to the lakes where all the poets went to die',
        'I know my love should be celebrated, but you tolerate it',
        'Please don’t ever become a stranger. Whose laugh I could recognize anywhere',
        'When all you wanted was to be wanted, wish you could go back and tell yourself what you know now',
        'The saddest fear comes creeping in that you never loved me, or her, or anyone, or anything',
        'This is how the world works, you gotta leave before you get left',
        'Oh, I’m falling in love. I thought the plane was going down. How’d you turn it right around',
        'You gotta step into the daylight and let it go',
        'Memories feel like weapons',
        'I walked through the door with you, the air was cold, But somethin’ ‘bout it felt like home somehow',
        'And I was thinkin’ on the drive down: Any time now. He’s gonna say it’s love. You never called it what it was'
    ];
    return list;
};

// Function to get random quote 
const randomNumber = () => {
    const numMax = allQuotes().length;
    const randonNumber = Math.floor(Math.random() * numMax);
    return randonNumber;
};

//Function to show random quotes in DOM
const showQuotes = () => {
    const listQuotes = allQuotes();
    const parentDiv = document.querySelector('.content.quotes');

    // Limpiar el contenido existente del contenedor
    parentDiv.innerHTML = '';

    // Reordenar el array de citas de forma aleatoria
    listQuotes.sort(() => Math.random() - 0.5);

    // Recorrer el array de citas y crear un elemento div con la clase 'card' para cada una
    listQuotes.forEach(quote => {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        const pElement = document.createElement('p');
        pElement.classList.add('card', 'quote');
        pElement.textContent = quote;
        divCard.appendChild(pElement);
        parentDiv.appendChild(divCard);
    });
};

//Function to get random quote
const getQuoteDaily = () => {
    const listQuotes = allQuotes();
    const elementQuote = document.getElementById('card-daily');

    // Verificar si hay citas guardadas en localStorage
    const storedQuote = localStorage.getItem('dailyQuote');

    // Si hay una cita guardada en localStorage, usarla
    if (storedQuote) {
        elementQuote.textContent = storedQuote;
    } else {
        let numRandom;
        let selectQuote;

        // Seleccionar una cita aleatoria hasta que sea diferente de la cita actual
        do {
            numRandom = randomNumber();
            selectQuote = listQuotes[numRandom];
        } while (elementQuote.textContent.trim() === selectQuote.trim());

        // Mostrar la cita seleccionada en el elemento y guardarla en localStorage
        elementQuote.textContent = selectQuote;
        localStorage.setItem('dailyQuote', selectQuote);
    }
};

//Function to update random quote
const updateQuoteDaily = () => {
    const listQuotes = allQuotes();
    const elementQuote = document.getElementById('card-daily');

    // Eliminar la cita guardada en localStorage
    localStorage.removeItem('dailyQuote');

    // Guardar una nueva cita en localStorage
    let numRandom;
    let selectQuote;

    // Seleccionar una cita aleatoria hasta que sea diferente de la cita actual
    do {
        numRandom = randomNumber();
        selectQuote = listQuotes[numRandom];
    } while (elementQuote.textContent.trim() === selectQuote.trim());

    // Mostrar la cita seleccionada en el elemento y guardarla en localStorage
    elementQuote.textContent = selectQuote;
    localStorage.setItem('dailyQuote', selectQuote);
};

//Function to clean localStorage
const cleanLocalStorage = () => {
   localStorage.removeItem('dailyQuote');
};

